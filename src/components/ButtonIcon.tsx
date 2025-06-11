import type { ButtonProps, TooltipProps } from "antd";
import { type CSSProperties } from "react";
import SvgIcon from "./SvgIcon";

interface ButtonIconProps extends Omit<ButtonProps, 'icon | iconPosition'> {
    children?: React.ReactNode;
    icon?: string;
    className?: string;
    style?: CSSProperties;
    tooltipContent?: string;
    tooltipPlacement?: TooltipProps['placement'];
    triggerParent?: boolean;
    zIndex?: number;
}

const computeClass = (className: string) => {
    let clsStr = className;

    if (!clsStr.includes('h-')) {
        clsStr += ' h-36px';
    }

    if (!clsStr.includes('text-')) {
        clsStr += ' text-icon';
    }

    return clsStr;
};

const ButtonIcon = ({
    children,
    className = 'h-36px text-icon',
    icon,
    style,
    tooltipContent,
    tooltipPlacement = 'bottom',
    triggerParent,
    zIndex = 98,
    ...rest
}: ButtonIconProps) => {
    const cls = computeClass(className);

    function getPopupContainer(triggerNode: HTMLElement) {
        return triggerParent ? triggerNode.parentElement! : triggerNode;
    }

    return (
        <ATooltip
            getPopupContainer={getPopupContainer}
            placement={tooltipPlacement}
            title={tooltipContent}
            trigger={['hover', 'click']}
            zIndex={zIndex}
        >
            <AButton
                className={cls}
                type='text'
                {...rest}
            >
                <div className="flex-center gap-8px">
                    {children || (
                        <SvgIcon
                            icon={icon}
                            style={style}
                        />
                    )}
                </div>
            </AButton>
        </ATooltip>
    )
};

export default ButtonIcon;
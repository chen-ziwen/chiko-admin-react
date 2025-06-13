import { Icon } from '@iconify/react';
import type { CSSProperties } from 'react';

interface SvgIconProps {
  className?: string;
  icon?: string;
  localIcon?: string;
  style?: CSSProperties;
}

const symbolId = (localIcon: string = 'no-icon') => {
  const iconName = localIcon || 'no-icon';
  return `icon-${iconName}`;
};

const SvgIcon = ({ icon, localIcon, ...props }: SvgIconProps) => {
  return localIcon || !icon ? (
    <svg
      height="1em"
      width="1em"
      {...props}
      aria-hidden="true"
    >
      <use
        fill="currentColor"
        href={symbolId(localIcon)}
      />
    </svg>
  ) : (
    <Icon
      icon={icon}
      {...props}
    />
  );
};

export default SvgIcon;

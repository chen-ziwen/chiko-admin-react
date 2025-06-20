import DarkModeContainer from '@/components/DarkModeContainer.tsx';
import { GLOBAL_SIDER_MENU_ID } from '@/constants/app';
import { ThemeContext } from '@/features/theme';

// import GlobalLogo from './GlobalLogo';

interface Props {
  headerHeight: number;
  inverted: boolean;
  isHorizontalMix: boolean;
  isVerticalMix: boolean;
  siderCollapse: boolean;
}

// const LayoutSider: FC<Props> = memo(({ headerHeight, inverted, isHorizontalMix, isVerticalMix, siderCollapse }) => {
export const LayoutSider: FC<Props> = memo(({ inverted, isHorizontalMix, isVerticalMix }) => {
  const { darkMode } = useContext(ThemeContext);

  const showLogo = !isVerticalMix && !isHorizontalMix;

  const darkMenu = !darkMode && !isHorizontalMix && inverted;

  return (
    <DarkModeContainer
      className="shadow-sider size-full flex-col-stretch"
      inverted={darkMenu}
    >
      {showLogo &&
        // <GlobalLogo
        //   showTitle={!siderCollapse}
        //   style={{ height: `${headerHeight}px` }}
        // />
        null}
      <div
        className={showLogo ? 'flex-1-hidden' : 'h-full'}
        id={GLOBAL_SIDER_MENU_ID}
      />
    </DarkModeContainer>
  );
});

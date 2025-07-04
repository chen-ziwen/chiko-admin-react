import { AdminLayout, LAYOUT_SCROLL_EL_ID, type LayoutMode } from '@chiko-admin/layout';
import { configResponsive } from 'ahooks';
import { Suspense } from 'react';

import {
  LAYOUT_MODE_HORIZONTAL,
  LAYOUT_MODE_HORIZONTAL_MIX,
  LAYOUT_MODE_VERTICAL,
  LAYOUT_MODE_VERTICAL_MIX
} from '@/constants/common';
// import { useMixMenuContext } from '@/features/menu';
import MenuProvider from '@/features/menu/MenuProvider';
import {
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutMenu,
  LayoutSider,
  LayoutTabbar,
  ThemeDrawer
} from '@/layouts/modules';
import {
  getFullContent,
  getMixSiderFixed,
  getSiderCollapse,
  getThemeSettings,
  setIsMobile,
  setLayoutMode,
  setSiderCollapse
} from '@/stores/modules';

// 响应式配置跟 bootstrap 是一致的
configResponsive({
  small: 640
});

const BasicLayout = () => {
  const dispatch = useAppDispatch();

  const themeSettings = useAppSelector(getThemeSettings);

  const fullContent = useAppSelector(getFullContent);

  const responsive = useResponsive();

  const siderCollapse = useAppSelector(getSiderCollapse);

  const mixSiderFixed = useAppSelector(getMixSiderFixed);

  const siderVisible = themeSettings.layout.mode !== LAYOUT_MODE_HORIZONTAL;
  const isVerticalMix = themeSettings.layout.mode === LAYOUT_MODE_VERTICAL_MIX;
  const isHorizontalMix = themeSettings.layout.mode === LAYOUT_MODE_HORIZONTAL_MIX;
  const layoutMode = themeSettings.layout.mode.includes(LAYOUT_MODE_VERTICAL)
    ? LAYOUT_MODE_VERTICAL
    : LAYOUT_MODE_HORIZONTAL;

  const isMobile = !responsive.sm;

  function getSiderWidth() {
    // const { reverseHorizontalMix } = themeSettings.layout;

    const { mixChildMenuWidth, mixWidth, width } = themeSettings.sider;

    // if (isHorizontalMix && reverseHorizontalMix) {
    //   return isActiveFirstLevelMenuHasChildren ? width : 0;
    // }

    let w = isVerticalMix || isHorizontalMix ? mixWidth : width;

    // if (isVerticalMix && mixSiderFixed && childLevelMenus.length) {
    //   w += mixChildMenuWidth;
    // }

    if (isVerticalMix && mixSiderFixed) {
      w += mixChildMenuWidth;
    }

    return w;
  }

  const siderWidth = getSiderWidth();

  function getSiderCollapsedWidth() {
    // const { reverseHorizontalMix } = themeSettings.layout;
    const { collapsedWidth, mixChildMenuWidth, mixCollapsedWidth } = themeSettings.sider;

    // if (isHorizontalMix && reverseHorizontalMix) {
    //   return isActiveFirstLevelMenuHasChildren ? collapsedWidth : 0;
    // }

    let w = isVerticalMix || isHorizontalMix ? mixCollapsedWidth : collapsedWidth;

    // if (isVerticalMix && mixSiderFixed && childLevelMenus.length) {
    //   w += mixChildMenuWidth;
    // }
    if (isVerticalMix && mixSiderFixed) {
      w += mixChildMenuWidth;
    }

    return w;
  }
  const siderCollapsedWidth = getSiderCollapsedWidth();

  function updateSiderCollapse() {
    dispatch(setSiderCollapse(true));
  }

  useLayoutEffect(() => {
    dispatch(setIsMobile(isMobile));
    if (isMobile) {
      dispatch(setLayoutMode('vertical'));
    }
  }, [isMobile, dispatch]);

  return (
    <MenuProvider>
      <AdminLayout
        fixedFooter={themeSettings.footer.fixed}
        fixedTop={themeSettings.fixedHeaderAndTab}
        Footer={<LayoutFooter />}
        footerHeight={themeSettings.footer.height}
        footerVisible={themeSettings.footer.visible}
        fullContent={fullContent}
        headerHeight={themeSettings.header.height}
        isMobile={isMobile}
        mode={layoutMode as LayoutMode}
        rightFooter={themeSettings.footer.right}
        scrollElId={LAYOUT_SCROLL_EL_ID}
        scrollMode={themeSettings.layout.scrollMode}
        siderCollapse={siderCollapse}
        siderCollapsedWidth={siderCollapsedWidth}
        siderVisible={siderVisible}
        siderWidth={siderWidth}
        Tab={<LayoutTabbar />}
        tabHeight={themeSettings.tab.height}
        tabVisible={themeSettings.tab.visible}
        updateSiderCollapse={updateSiderCollapse}
        Header={
          <LayoutHeader
            isMobile={isMobile}
            mode={themeSettings.layout.mode}
            reverse={themeSettings.layout.reverseHorizontalMix}
            siderWidth={themeSettings.sider.width}
          />
        }
        Sider={
          <LayoutSider
            headerHeight={themeSettings.header.height}
            inverted={themeSettings.sider.inverted}
            isHorizontalMix={isHorizontalMix}
            isVerticalMix={isVerticalMix}
            siderCollapse={siderCollapse}
          />
        }
      >
        <LayoutContent />

        <LayoutMenu
          mode={themeSettings.layout.mode}
          reverse={themeSettings.layout.reverseHorizontalMix}
        />

        <Suspense fallback={null}>
          <ThemeDrawer />
        </Suspense>
      </AdminLayout>
    </MenuProvider>
  );
};

export default BasicLayout;

// import type { FC, PropsWithChildren } from 'react';
// import type { RouteObject } from 'react-router-dom';

// import routes from '@/router';
// import { selectActiveFirstLevelMenuKey, setActiveFirstLevelMenuKey } from '@/stores/modules';

// import { useLang } from '../lang';
// // import { useRoute, useRouter } from '../router';

// import { filterRoutesToMenus } from './MenuUtil';
// import { MixMenuContext } from './menuContext';

// function getBaseChildrenRoutes(rs: RouteObject[]) {
//   const baseRoutes = rs[0].children;

//   return baseRoutes || [];
// }

// const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
//   // const route = useRoute();

//   // const router = useRouter();

//   const dispatch = useAppDispatch();

//   const { locale } = useLang();

//   const activeFirstLevelMenuKey = useAppSelector(selectActiveFirstLevelMenuKey);

//   const menus = useMemo(
//     () => filterRoutesToMenus(getBaseChildrenRoutes(routes.routes)),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [routes.routes, locale]
//   );

//   const firstLevelMenu = menus.map(menu => {
//     const { children: _, ...rest } = menu;
//     return rest;
//   }) as App.Global.Menu[];

//   const childLevelMenus = menus.find(menu => menu.key === activeFirstLevelMenuKey)?.children as App.Global.Menu[];

//   const selectKey = '';
//   // const selectKey = getSelectKey(route);

//   /** - 可以手动指定菜单或者是默认当前路由的一级菜单 */
//   function changeActiveFirstLevelMenuKey(key?: string) {
//     // const routeKey = key || getActiveFirstLevelMenuKey(route);

//     dispatch(setActiveFirstLevelMenuKey(key || ''));
//   }

//   const mixMenuContext = {
//     activeFirstLevelMenuKey,
//     allMenus: menus,
//     childLevelMenus: childLevelMenus || [],
//     firstLevelMenu,
//     isActiveFirstLevelMenuHasChildren: activeFirstLevelMenuKey ? Boolean(childLevelMenus) : false,
//     route,
//     selectKey,
//     setActiveFirstLevelMenuKey: changeActiveFirstLevelMenuKey
//   };

//   return <MixMenuContext value={mixMenuContext}>{children}</MixMenuContext>;
// };

// export default MenuProvider;

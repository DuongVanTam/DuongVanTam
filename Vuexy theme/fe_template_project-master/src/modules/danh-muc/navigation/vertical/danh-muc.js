import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/danh-muc/constants/constants'

export default [
  {
    title: MENU_ROUTE_NAME.DANH_MUC.NAME,
    icon: 'FileTextIcon',
    children: [
      {
        title: MENU_ROUTE_NAME.DANH_MUC.PRODUCTS,
        route: ROUTE_NAME.DANH_MUC.PRODUCTS,
      },
      {
        title: MENU_ROUTE_NAME.DANH_MUC.ARTICLES,
        route: ROUTE_NAME.DANH_MUC.ARTICLES,
      },
    ],
  },
]

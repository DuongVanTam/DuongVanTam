// eslint-disable-next-line import/named
import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/danh-muc/constants/constants'

// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: ROUTE_NAME.DANH_MUC.NAME + ROUTE_NAME.DANH_MUC.PRODUCTS,
    name: ROUTE_NAME.DANH_MUC.PRODUCTS,
    component: () => import('@/modules/danh-muc/views/ProductsList.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.DANH_MUC.PRODUCTS,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.DANH_MUC.NAME,
        },
        {
          text: MENU_ROUTE_NAME.DANH_MUC.PRODUCTS,
          active: true,
        },
      ],
    },
  },
]

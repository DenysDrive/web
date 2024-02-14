const routes = [
  {
    path: '/',
    redirect: '/sign-in',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/sign-in',
        component: () => import('pages/SignIn.vue')
      },
      {
        path: '/library',
        component: () => import('pages/Library.vue')
      },
      {
        path: '/test',
        component: () => import('pages/Test.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

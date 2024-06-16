const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/tugas1',
    redirect: to => {
      window.location.href = 'https://najwa-project-cv.netlify.app/';
    }
  },
  {
    path: '/tugas2',
    redirect: to => {
      window.location.href = 'https://najwaaa.netlify.app/';
    }
  },
  {
    path: '/tugas3',
    redirect: to => {
      window.location.href = 'https://najwalutfia-tugas3prakpbk.vercel.app/';
    }
  },
  {
    path: '/tugas4',
    redirect: to => {
      window.location.href = 'https://najwa-lutfia-223510903-tugas4.vercel.app/';
    }
  },
  {
    path: '/tugas5',
    redirect: to => {
      window.location.href = 'https://tugas5-najwa-lutfia.vercel.app/';
    }
  },
  {
    path: '/tugas6',
    redirect: to => {
      window.location.href = 'https://najwa-lutfia-tugas6.vercel.app/';
    }
  },
  {
    path: '/tugas7',
    redirect: to => {
      window.location.href = 'https://najwa-lutfia-tugas7.vercel.app/';
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

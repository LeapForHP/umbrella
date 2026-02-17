import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load components (now unified for all languages)
const HomePage = lazy(() => import('../pages/home'));
const AboutPage = lazy(() => import('../pages/about'));
const NewsPage = lazy(() => import('../pages/news'));
const ContactPage = lazy(() => import('../pages/contact'));
const RepairPage = lazy(() => import('../pages/repair'));
const SilentUmbrellaPage = lazy(() => import('../pages/products/silent-umbrella'));
const BraidUmbrellaPage = lazy(() => import('../pages/products/braid-umbrella'));
const FoldingUmbrellaPage = lazy(() => import('../pages/products/folding-umbrella'));
const ParasolPage = lazy(() => import('../pages/products/parasol'));
const KoshuWeavingPage = lazy(() => import('../pages/products/koshu-weaving'));
const OthersPage = lazy(() => import('../pages/products/others'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  // English routes (default)
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/repair',
    element: <RepairPage />
  },
  {
    path: '/products/silent-umbrella',
    element: <SilentUmbrellaPage />
  },
  {
    path: '/products/braid-umbrella',
    element: <BraidUmbrellaPage />
  },
  {
    path: '/products/folding-umbrella',
    element: <FoldingUmbrellaPage />
  },
  {
    path: '/products/parasol',
    element: <ParasolPage />
  },
  {
    path: '/products/koshu-weaving',
    element: <KoshuWeavingPage />
  },
  {
    path: '/products/others',
    element: <OthersPage />
  },

  // Japanese routes (same components, language changes via i18n)
  {
    path: '/ja',
    element: <HomePage />
  },
  {
    path: '/ja/about',
    element: <AboutPage />
  },
  {
    path: '/ja/news',
    element: <NewsPage />
  },
  {
    path: '/ja/contact',
    element: <ContactPage />
  },
  {
    path: '/ja/repair',
    element: <RepairPage />
  },
  {
    path: '/ja/products/silent-umbrella',
    element: <SilentUmbrellaPage />
  },
  {
    path: '/ja/products/braid-umbrella',
    element: <BraidUmbrellaPage />
  },
  {
    path: '/ja/products/folding-umbrella',
    element: <FoldingUmbrellaPage />
  },
  {
    path: '/ja/products/parasol',
    element: <ParasolPage />
  },
  {
    path: '/ja/products/koshu-weaving',
    element: <KoshuWeavingPage />
  },
  {
    path: '/ja/products/others',
    element: <OthersPage />
  },

  // Chinese routes (same components, language changes via i18n)
  {
    path: '/zh',
    element: <HomePage />
  },
  {
    path: '/zh/about',
    element: <AboutPage />
  },
  {
    path: '/zh/news',
    element: <NewsPage />
  },
  {
    path: '/zh/contact',
    element: <ContactPage />
  },
  {
    path: '/zh/repair',
    element: <RepairPage />
  },
  {
    path: '/zh/products/silent-umbrella',
    element: <SilentUmbrellaPage />
  },
  {
    path: '/zh/products/braid-umbrella',
    element: <BraidUmbrellaPage />
  },
  {
    path: '/zh/products/folding-umbrella',
    element: <FoldingUmbrellaPage />
  },
  {
    path: '/zh/products/parasol',
    element: <ParasolPage />
  },
  {
    path: '/zh/products/koshu-weaving',
    element: <KoshuWeavingPage />
  },
  {
    path: '/zh/products/others',
    element: <OthersPage />
  },

  // 404 page
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;

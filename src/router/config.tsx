
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load components
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const NewsPage = lazy(() => import('../pages/news/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const RepairPage = lazy(() => import('../pages/repair/page'));
const SilentUmbrellaPage = lazy(() => import('../pages/products/silent-umbrella/page'));
const BraidUmbrellaPage = lazy(() => import('../pages/products/braid-umbrella/page'));
const FoldingUmbrellaPage = lazy(() => import('../pages/products/folding-umbrella/page'));
const ParasolPage = lazy(() => import('../pages/products/parasol/page'));
const KoshuWeavingPage = lazy(() => import('../pages/products/koshu-weaving/page'));
const OthersPage = lazy(() => import('../pages/products/others/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Japanese pages
const HomePageJa = lazy(() => import('../pages/ja/page'));
const ContactPageJa = lazy(() => import('../pages/ja/contact/page'));
const AboutPageJa = lazy(() => import('../pages/ja/about/page'));
const NewsPageJa = lazy(() => import('../pages/ja/news/page'));
const RepairPageJa = lazy(() => import('../pages/ja/repair/page'));
const SilentUmbrellaPageJa = lazy(() => import('../pages/ja/products/silent-umbrella/page'));
const BraidUmbrellaPageJa = lazy(() => import('../pages/ja/products/braid-umbrella/page'));
const FoldingUmbrellaPageJa = lazy(() => import('../pages/ja/products/folding-umbrella/page'));
const ParasolPageJa = lazy(() => import('../pages/ja/products/parasol/page'));
const KoshuWeavingPageJa = lazy(() => import('../pages/ja/products/koshu-weaving/page'));
const OthersPageJa = lazy(() => import('../pages/ja/products/others/page'));

// Chinese pages
const HomePageZh = lazy(() => import('../pages/zh/page'));
const ContactPageZh = lazy(() => import('../pages/zh/contact/page'));
const AboutPageZh = lazy(() => import('../pages/zh/about/page'));
const NewsPageZh = lazy(() => import('../pages/zh/news/page'));
const RepairPageZh = lazy(() => import('../pages/zh/repair/page'));
const SilentUmbrellaPageZh = lazy(() => import('../pages/zh/products/silent-umbrella/page'));
const BraidUmbrellaPageZh = lazy(() => import('../pages/zh/products/braid-umbrella/page'));
const FoldingUmbrellaPageZh = lazy(() => import('../pages/zh/products/folding-umbrella/page'));
const ParasolPageZh = lazy(() => import('../pages/zh/products/parasol/page'));
const KoshuWeavingPageZh = lazy(() => import('../pages/zh/products/koshu-weaving/page'));
const OthersPageZh = lazy(() => import('../pages/zh/products/others/page'));

const routes: RouteObject[] = [
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
  // Japanese routes
  {
    path: '/ja',
    element: <HomePageJa />
  },
  {
    path: '/ja/contact',
    element: <ContactPageJa />
  },
  {
    path: '/ja/about',
    element: <AboutPageJa />
  },
  {
    path: '/ja/news',
    element: <NewsPageJa />
  },
  {
    path: '/ja/repair',
    element: <RepairPageJa />
  },
  {
    path: '/ja/products/silent-umbrella',
    element: <SilentUmbrellaPageJa />
  },
  {
    path: '/ja/products/braid-umbrella',
    element: <BraidUmbrellaPageJa />
  },
  {
    path: '/ja/products/folding-umbrella',
    element: <FoldingUmbrellaPageJa />
  },
  {
    path: '/ja/products/parasol',
    element: <ParasolPageJa />
  },
  {
    path: '/ja/products/koshu-weaving',
    element: <KoshuWeavingPageJa />
  },
  {
    path: '/ja/products/others',
    element: <OthersPageJa />
  },
  // Chinese routes
  {
    path: '/zh',
    element: <HomePageZh />
  },
  {
    path: '/zh/contact',
    element: <ContactPageZh />
  },
  {
    path: '/zh/about',
    element: <AboutPageZh />
  },
  {
    path: '/zh/news',
    element: <NewsPageZh />
  },
  {
    path: '/zh/repair',
    element: <RepairPageZh />
  },
  {
    path: '/zh/products/silent-umbrella',
    element: <SilentUmbrellaPageZh />
  },
  {
    path: '/zh/products/braid-umbrella',
    element: <BraidUmbrellaPageZh />
  },
  {
    path: '/zh/products/folding-umbrella',
    element: <FoldingUmbrellaPageZh />
  },
  {
    path: '/zh/products/parasol',
    element: <ParasolPageZh />
  },
  {
    path: '/zh/products/koshu-weaving',
    element: <KoshuWeavingPageZh />
  },
  {
    path: '/zh/products/others',
    element: <OthersPageZh />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;

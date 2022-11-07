import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
// Public Routes
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

const priveateRoutes = [];

export { publicRoutes, priveateRoutes };

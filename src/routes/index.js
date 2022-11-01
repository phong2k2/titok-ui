import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
// Public Routes
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/@:nickname',
    component: Profile,
    layout: HeaderOnly,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

const priveateRoutes = [];

export { publicRoutes, priveateRoutes };

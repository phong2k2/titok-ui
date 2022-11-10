import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/icons';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem to={config.router.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} title={'Dành cho bạn'} />
        <MenuItem
          to={config.router.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
          title={'Đang Follow'}
        />
        <MenuItem to={config.router.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} title={'LIVE'} />

        <SuggestedAccounts lable="Tài khoản được đề xuất" />
      </Menu>
    </aside>
  );
}

export default Sidebar;

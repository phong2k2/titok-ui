import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
// import * as searchService from '~/services/searchService';
import * as userService from '~/services/userService';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/icons';

let INIT_PAGE = 5;

const cx = classNames.bind(styles);
function Sidebar() {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  // const [followingAccounts, setFollowingAccounts] = useState([]);
  const [perPages, setPerPage] = useState(INIT_PAGE);

  const handleSeeAll = () => {
    if (suggestedUsers.length === INIT_PAGE) {
      setPerPage(INIT_PAGE * 4);
    } else {
      setPerPage(INIT_PAGE);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await userService.forYou({ page: 1, perPage: perPages });

        if (Array.isArray(res)) {
          setSuggestedUsers(res);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, [perPages]);
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('container')}>
        <Menu>
          <MenuItem
            to={config.router.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
            title={'Dành cho bạn'}
          />
          <MenuItem
            to={config.router.following}
            icon={<UserGroupIcon />}
            activeIcon={<UserGroupActiveIcon />}
            title={'Đang Follow'}
          />
          <MenuItem to={config.router.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} title={'LIVE'} />
          <SuggestedAccounts
            lable="Suggested accounts"
            data={suggestedUsers}
            onSeeAll={handleSeeAll}
            isSeeAll={suggestedUsers.length === INIT_PAGE ? 'SeeAll' : 'SeeLest'}
          />
          <SuggestedAccounts
            lable="Following accounts"
            data={suggestedUsers}
            isSeeAll={suggestedUsers.length === INIT_PAGE ? 'SeeAll' : 'SeeLest'}
          />
        </Menu>
      </div>
    </aside>
  );
}

export default Sidebar;

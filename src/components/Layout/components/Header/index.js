import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignIn,
  faUser,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import style from './Header.module.scss';
import { images } from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/incon';
import Image from '~/components/Image';
import Search from '../Search';

const MENU_ITEMS = [
  {
    title: 'Tiếng việt',
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English 1',
          children: {
            title: 'Language',
            data: [
              {
                type: 'Language',
                code: 'en',
                title: 'English ',
              },
              {
                type: 'Vietnamese',
                code: 'vi',
                title: 'Tieng viet',
              },
            ],
          },
        },
        {
          type: 'Vietnamese',
          code: 'vi',
          title: 'Tieng viet',
        },
      ],
    },
  },
  {
    title: 'Phản hồi và trợ giúp',
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    to: '/fllowing',
  },
  {
    title: 'Phím tắt trên bàn phím',
    icon: <FontAwesomeIcon icon={faKeyboard} />,
  },
];

const userMenus = [
  {
    title: 'Xem hồ sơ',
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    title: 'Nhận xu',
    icon: <FontAwesomeIcon icon={faCoins} />,
  },
  {
    title: 'Live studio',
    icon: <FontAwesomeIcon icon={faVideo} />,
  },
  {
    title: 'Caì đặt',
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  ...MENU_ITEMS,

  {
    title: 'Đăng xuất',
    icon: <FontAwesomeIcon icon={faSignIn} />,
    separate: true,
  },
];
const cx = className.bind(style);
function Header() {
  const handleMenuChange = (menuitem) => {
    console.log(menuitem);
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <div>
          <Search />
        </div>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Hộp thư" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outline leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Tải lên
              </Button>
              <Button primary className={cx('custom-login')}>
                Log in
              </Button>
            </>
          )}
          <>
            <Menu items={currentUser ? userMenus : MENU_ITEMS} onChange={handleMenuChange}>
              {currentUser ? (
                <Image
                  className={cx('user-avatar')}
                  src="https://p77-sign-sg.utiktokcdn.com/tos-alisg-avt-0068/f7429bb2cbe3439139db6a38572c4e46~c5_300x300.webp?x-expires=1666083600&x-signature=keAOxwDOzsAe0Sz%2BmyHEUZc0G4U%3D"
                  fallBack="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                />
              ) : (
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </>
        </div>
      </div>
    </header>
  );
}

export default Header;

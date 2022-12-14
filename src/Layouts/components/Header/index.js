import { useState, createContext, useEffect } from 'react';
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
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import style from './Header.module.scss';
import { images } from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import Modal from '~/Layouts/components/Auth';
import Login from '~/Layouts/components/Auth/partials/Login';
import SignUp from '~/Layouts/components/Auth/partials/SignUp';
import PhoneLogin from '~/Layouts/components/Auth/partials/PhoneLogin';

const MENU_ITEMS = [
  {
    title: 'Tiếng việt',
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English 1',
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

export const ModalBodyNameContext = createContext();

function Header() {
  const handleMenuChange = (menuitem) => {
    // console.log(menuitem);
  };

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalBodyName, setModalBodyName] = useState(null);
  const [children, setChildren] = useState(<Login />);
  const [nextPage, setNextPage] = useState(null);

  const handleModalBody = (value) => {
    setModalBodyName(value || 'login');
  };
  const value = {
    handleModalBody,
  };
  const currentUser = false;

  useEffect(() => {
    switch (modalBodyName) {
      case 'login':
        setChildren(<Login />);
        setNextPage(null);
        break;
      case 'signUp':
        setChildren(<SignUp />);
        setNextPage(null);
        break;
      case 'phoneLogin':
        setChildren(<PhoneLogin />);
        setNextPage('login');
        break;
      default:
        setChildren(<Login />);
        setNextPage(null);
        break;
    }
  }, [modalBodyName]);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.router.home} className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </Link>
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
              <Button
                primary
                className={cx('custom-login')}
                onClick={() => {
                  setShowAuthModal((prev) => !prev);
                }}
              >
                Log in
              </Button>
            </>
          )}

          <ModalBodyNameContext.Provider value={value}>
            {showAuthModal && (
              <Modal
                children={children}
                onClose={() => {
                  setShowAuthModal((prev) => !prev);
                  setModalBodyName('');
                }}
                nextPage={nextPage}
              />
            )}
          </ModalBodyNameContext.Provider>

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

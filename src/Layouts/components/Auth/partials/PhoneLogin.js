import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ModalBodyNameContext } from '../../Header';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

// const modal = [
//   {
//     title: 'Use phone / email / username',
//     icon: <FontAwesomeIcon icon={faUser} />,
//   },
//   {
//     title: 'Countinue with Facebook',
//     icon: <Facebook width="2rem" height="2rem" />,
//   },
//   {
//     title: 'Countinue with Google',
//     icon: <Google width="2rem" height="2rem" />,
//   },
// ];

function PhoneLogin() {
  //   const renderButtons = () => {
  //     return modal.map((boutton, key) => {
  //       return (
  //         <div key={key} className={cx('wraper')}>
  //           <div className={cx('icon')}>{boutton.icon}</div>
  //           <p className={cx('titleBtn')}>{boutton.title}</p>
  //         </div>
  //       );
  //     });
  //   };

  const modalBody = useContext(ModalBodyNameContext);

  return (
    <>
      <div className={cx('containes')}>
        <div className={cx('form')}>
          <h4 className={cx('title')}>Log in</h4>
          <div className={cx('description')}>
            Phone
            <a className={cx('styledLink')}>Login in with email or username</a>
          </div>
          <div className={cx('container')}>
            <div className={cx('input')}>
              <div className={cx('inputHed')}>
                <span className={cx('spanLabel')}>
                  VN +84
                  <div className={cx('icon-down')}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </span>
              </div>
              <div className={cx('input_number')}>
                <input className={cx('inputContainer')} type="text" placeholder="Phone number" />
              </div>
            </div>
            <div className={cx('input')}>
              <div className={cx('input_number')}>
                <input className={cx('inputContainer')} type="text" placeholder="Phone number" />
              </div>
              <span className={cx('send_Code')}>Send code</span>
            </div>
            <a href="" className={cx('text')}>
              Log In with password
            </a>
            <Button className={cx('submit')}>Log in</Button>
          </div>
        </div>
      </div>

      <div className={cx('fotter')}>
        <h3 className={cx('fotterTitle')}>Already have an account</h3>
        <a className={cx('singnUp')} onClick={() => modalBody.handleModalBody('login')}>
          Sign Up
        </a>
      </div>
    </>
  );
}

export default PhoneLogin;

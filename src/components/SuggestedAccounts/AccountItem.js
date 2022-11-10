import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function Account() {
  const renderReview = (props) => {
    return (
      <div className={cx('account-result')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive offset={[-20, 0]} delay={[500, 500]} placement="bottom" render={renderReview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668150000&x-signature=VMBgYW14eTKmuQxQdeuSda%2FOfVo%3D"
          />
          <div className={cx('body')}>
            <div className={cx('nickname')}>
              <h4>tiin.vn</h4>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
            <p className={cx('name')}>Tinn.vn</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default Account;

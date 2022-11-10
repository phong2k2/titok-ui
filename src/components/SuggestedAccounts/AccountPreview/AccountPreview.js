import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668150000&x-signature=VMBgYW14eTKmuQxQdeuSda%2FOfVo%3D"
        />
        <Button className={cx('preview-btn')} small primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <div className={cx('nickname')}>
          <h4>Tiin.vn</h4>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </div>
        <p className={cx('name')}>Tinn.vn</p>
        <p className={cx('analytics')}>
          <span className={cx('value')}>6.3M</span>
          <span className={cx('label')}>Follower</span>
          <span className={cx('value')}>218.5M</span>
          <span className={cx('label')}>Thich</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;

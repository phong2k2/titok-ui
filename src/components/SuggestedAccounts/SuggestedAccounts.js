import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ lable }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('fllowing-account')}>{lable}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <div className={cx('more-btn')}>
        <p>Xem tất cả</p>
      </div>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  lable: PropTypes.string.isRequired,
};
export default SuggestedAccounts;

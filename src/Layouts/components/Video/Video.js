import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faHeart,
  faMusic,
  faPause,
  faPlay,
  faShare,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Video() {
  return (
    <div className={cx('container')}>
      <a className={cx('avatar')}>
        <img src="data:image/jpeg;base64,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" />
      </a>
      <div className={cx('content')}>
        <div className={cx('authName')}>
          <a>
            <h4 className={cx('name')}>Trần Đức Phong</h4>
          </a>
          <p className={cx('title')}>Phongđẹptrai</p>
        </div>
        <Button outline className={cx('follow')}>
          Follow
        </Button>
        <div className={cx('titleContainer')}>
          <span className={cx('spanTetxt')}>
            Khi tui và đứa em bị tóp tóp thao túng tâm lý va rat nhieu kha nang hai lai{' '}
          </span>
          <a className={cx('styledCommonLink')}>#BoiVinaPhone</a>
          <a className={cx('styledCommonLink')}>#CunNgau</a>
          <a className={cx('styledCommonLink')}>#dethuong</a>
          <a className={cx('styledCommonLink')}>#cute</a>
        </div>
        <h4 className={cx('titleMusic')}>
          <FontAwesomeIcon className={cx('iconMusic')} icon={faMusic} />
          <a href="#">nhạc nền - Yến nồi cơm điện</a>
        </h4>

        <div className={cx('videoWrapper')}>
          <div className={cx('divContainer')}>
            <div className={cx('videoContent')}>
              <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/f59c072a9b754843bf62814a2604e42c_1668391721~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1672358400&x-signature=XVvEH55PXpD4O5W0npg1I%2BE2%2BNY%3D" />
              <div className={cx('videoContainer')}>
                <div className={cx('eleVideo')}>
                  <video
                    className={cx('video')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/838-6371fd17211a6.mp4"
                    autoplay
                    preload="auto"
                  ></video>
                </div>
              </div>
            </div>
            <div className={cx('loading')}>
              <FontAwesomeIcon className={cx('pause')} icon={faPlay} />
              <FontAwesomeIcon className={cx('play')} icon={faPause} />
            </div>
            <div className={cx('bar')}>
              <div className={cx('line')}>
                <input type="range" value="0" step="1" min="0" max="100" />
              </div>
              <div className={cx('time')}>
                <span className={cx('playTime')}>00:21</span>/<span className={cx('timeVideo')}>00:22</span>
              </div>
            </div>
            <div className={cx('volume')}>
              <FontAwesomeIcon className={cx('volume')} icon={faVolumeHigh} />
              <FontAwesomeIcon className={cx('closeVolume')} icon={faVolumeXmark} />
            </div>
          </div>
          <div className={cx('itemContainer')}>
            <button className={cx('interactive')}>
              <span className={cx('spanIcon')}>
                <FontAwesomeIcon className={cx('iconTym')} icon={faHeart} />
              </span>
              <strong>1.6M</strong>
            </button>
            <button className={cx('interactive')}>
              <span className={cx('spanIcon')}>
                <FontAwesomeIcon className={cx('iconComent')} icon={faCommentDots} />
              </span>
              <strong>1.6M</strong>
            </button>
            <button className={cx('interactive')}>
              <span className={cx('spanIcon')}>
                <FontAwesomeIcon icon={faShare} />
              </span>
              <strong className={cx('iconShare')}>869</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

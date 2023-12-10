import classNames from 'classnames/bind'
import styles from './SearchingBar.module.scss'

const cx = classNames.bind(styles)

function SearchingBar() {
  return (
    <div className={cx('searching-container')}>
      <div className={cx('input-container')}>
        <input
          className={cx('searching-input')}
          placeholder="ex) 위치, 건물명"
        />
        <IconSearching className={cx('searching-icon')} />
      </div>
    </div>
  )
}

function IconSearching({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58317 2.2915C5.55609 2.2915 2.2915 5.55609 2.2915 9.58317C2.2915 13.6102 5.55609 16.8748 9.58317 16.8748C13.6102 16.8748 16.8748 13.6102 16.8748 9.58317C16.8748 5.55609 13.6102 2.2915 9.58317 2.2915ZM1.0415 9.58317C1.0415 4.86574 4.86574 1.0415 9.58317 1.0415C14.3006 1.0415 18.1248 4.86574 18.1248 9.58317C18.1248 11.7169 17.3424 13.668 16.0489 15.165L18.7751 17.8912C19.0192 18.1353 19.0192 18.531 18.7751 18.7751C18.531 19.0192 18.1353 19.0192 17.8912 18.7751L15.165 16.0489C13.668 17.3424 11.7169 18.1248 9.58317 18.1248C4.86574 18.1248 1.0415 14.3006 1.0415 9.58317Z"
        fill="#3366FF"
      />
    </svg>
  )
}

export default SearchingBar

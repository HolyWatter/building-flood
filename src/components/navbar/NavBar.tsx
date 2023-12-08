import { Link, useLocation } from 'react-router-dom'

import classNames from 'classnames/bind'
import Text from '../shared/Text'
import Logo from './Logo'

import styles from './NavBar.module.scss'

const cx = classNames.bind(styles)

function NavBar() {
  const { pathname } = useLocation()

  return (
    <div className={cx('nav-container')}>
      <Logo />
      <div className={cx('nav-button-container')}>
        <Link to="/" className={cx(['button', pathname === '/' && 'selected'])}>
          <Text typo="t3">지도로 보기</Text>
        </Link>
        <Link
          to="/dashboard"
          className={cx(['button', pathname === '/dashboard' && 'selected'])}
        >
          <Text typo="t3">현황 보기</Text>
        </Link>
      </div>
    </div>
  )
}

export default NavBar

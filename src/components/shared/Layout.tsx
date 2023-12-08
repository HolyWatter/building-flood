import { Outlet } from 'react-router-dom'
import NavBar from '../navbar/NavBar'

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout

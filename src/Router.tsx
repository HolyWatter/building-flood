import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import DashBoardPage from './pages/DashBoard'
import MapPage from './pages/Map'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MapPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

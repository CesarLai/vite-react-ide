import { FC, useMemo } from 'react'
import { BrowserRouter, Routes, RouteObject, Route } from 'react-router-dom'

import HomePage from '@/pages/Home'
import WorkbenchPage from '@/pages/Workbench'

const RootRouter: FC = () => {
  const routeList = useMemo<RouteObject[]>(() => {
    return [
      { path: '/', element: <HomePage /> },
      { path: '/workbench', element: <WorkbenchPage /> }
    ]
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default RootRouter

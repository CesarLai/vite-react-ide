import { FC, useMemo } from 'react'
import { BrowserRouter, Routes, RouteObject, Route } from 'react-router-dom'

import HomePage from '@/pages/Home'
import EditorPage from '@/pages/Editor'

const RootRouter: FC = () => {
  const routeList = useMemo<RouteObject[]>(() => {
    return [
      { path: '/', element: <HomePage /> },
      { path: '/editor', element: <EditorPage /> }
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

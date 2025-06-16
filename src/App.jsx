import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
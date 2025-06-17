import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='skill' element={<Skills />} />
        <Route path='project' element={<Projects />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
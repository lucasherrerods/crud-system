import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import { ToggleProvider } from './contexts/ToggleContext'
import { ModalProvider } from './contexts/ModalContext'

function App() {

  return (
    <ToggleProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/products' element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ToggleProvider>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
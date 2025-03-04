import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import profile from '../../assets/profile.jpg'
import { Home, User, Package, LogOut, ChevronRight } from "lucide-react"

function Sidebar() {
  // Hook para pegar a localização atual da URL
  const location = useLocation()

  // Verifica se a rota ativa é a atual
  const isActive = (path) => location.pathname === path

  // Estado que controla a funcionalidade toggle da sidebar, inicia fechada
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Insere o título respectivo da página atual
    if (location.pathname === '/users') {
      document.title = 'CRUD | Usuários'
    } else if (location.pathname === '/products') {
      document.title = 'CRUD | Produtos'
    } else {
      document.title = 'CRUD | Home'
    }
  }, [location]) // Executa sempre que a URL mudar

  return (
    <nav className={`fixed top-0 left-0 h-full bg-sky-950 z-10 transition-all ease-in-out transform whitespace-nowrap ${isOpen ? 'w-60 duration-200' : 'w-20 duration-900'}`}>
      <header className="flex items-center justify-center gap-3 mt-4">
        <div className='w-1 h-4 bg-yellow-400'></div>
        <h1 className={`${isOpen ? 'text-white uppercase font-bold tracking-widest' : 'hidden'}`}>CRUD System</h1>
        {/* Abreviação do título, só fica visível quando a sidebar está fechada */}
        <span className={isOpen ? 'hidden' : 'text-white uppercase font-bold tracking-widest'}>CS</span>
        <ChevronRight size={16} className={`absolute cursor-pointer w-5 h-5 text-black bg-yellow-400 rounded-full ${isOpen ? 'rotate-180 -right-1' : 'rotate-0 -right-3'}`} onClick={() => setIsOpen(!isOpen)} />
      </header>
      <div className='flex flex-col items-center gap-3 mt-14'>
        <img src={profile} alt="Foto de perfil" className={`rounded-full hover:scale-105 ${isOpen ? 'h-18 w-20' : 'h-12 w-14'}`} />
        <span className={isOpen ? 'text-white font-bold text-sm' : 'hidden'}>Lucas Herrero</span>
        <span className={isOpen ? 'text-yellow-400 text-xs' : 'hidden'}>Desenvolvedor Web</span>
      </div>
      <div className="h-[calc(100%-250px)] flex flex-col">
        <div className="flex-1 mt-14 flex flex-col items-center">
          <ul className={`text-white text-xs ${isOpen ? 'w-50' : 'w-auto'}`}>
            <li className={`h-10 w-full flex items-center justify-start gap-3 rounded-md px-4 mb-7 cursor-pointer ${isActive('/') ? 'bg-[#20505E] hover:opacity-80' : 'hover:bg-[#20505E]'}`}>
              <Link to={'/'} className="w-full flex items-center gap-3 px-4">
                <Home size={16} className='shrink' />
                <span className={isOpen ? 'grow text-left' : 'hidden'}>Home</span>
              </Link>
            </li>
            <li className={`h-10 w-full flex items-center justify-start gap-3 rounded-md px-4 mb-7 cursor-pointer ${isActive('/users') ? 'bg-[#20505E] hover:opacity-80' : 'hover:bg-[#20505E]'}`}>
              <Link to={'/users'} className="w-full flex items-center gap-3 px-4">
                <User size={16} className="shrink" />
                <span className={isOpen ? 'grow text-left' : 'hidden'}>Usuários</span>
              </Link>
            </li>
            <li className={`h-10 w-full flex items-center justify-start gap-3 rounded-md px-4 mb-7 cursor-pointer ${isActive('/products') ? 'bg-[#20505E] hover:opacity-80' : 'hover:bg-[#20505E]'}`}>
              <Link to={'/products'} className="w-full flex items-center gap-3 px-4">
                <Package size={16} className="shrink" />
                <span className={isOpen ? 'grow text-left' : 'hidden'}>Produtos</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto flex justify-center">
          <ul className={`text-white text-xs ${isOpen ? 'w-50' : 'w-auto'}`}>
            <li className="h-10 w-full flex items-center justify-start gap-3 rounded-md px-4 mb-7 cursor-pointer hover:bg-[#20505E]">
              <LogOut size={16} className='shrink' />
              <span className={isOpen ? 'grow text-left' : 'hidden'}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
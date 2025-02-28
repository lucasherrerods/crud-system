import profile from '../../assets/profile.jpg'
import { Home, User, Package, LogOut, ChevronRight } from "lucide-react"

function Sidebar() {

  return (
    <nav className="fixed top-0 left-0 h-full w-60 bg-sky-950 z-10">
      <header className="flex items-center justify-center gap-3 !mt-4">
        <div className="w-1 h-4 bg-yellow-400"></div>
        <h1 className="text-white uppercase font-bold tracking-widest">CRUD System</h1>
        <ChevronRight size={16} className='absolute -right-1 -translate-y-1/2 rotate-180 cursor-pointer w-5 h-5 text-black bg-yellow-400 rounded-full' />
      </header>
      <div className='flex flex-col items-center gap-3 !mt-14'>
        <img src={profile} alt="Foto de perfil" className='h-18 w-20 rounded-full' />
        <span className='text-white font-bold text-sm'>Lucas Herrero</span>
        <span className='text-yellow-400 text-xs'>Desenvolvedor Web</span>
      </div>
      <div className="h-[calc(100%-250px)] flex flex-col">
        {/* Seção de navegação */}
        <div className="flex-1 !mt-14 flex flex-col items-center">
          <ul className="w-50 text-white text-xs">
            <li className="h-10 w-full flex items-center justify-start gap-3 rounded-md !px-4 !mb-7 bg-[#20505E] cursor-pointer duration-300 ease-in-out hover:opacity-80">
              <Home size={16} className='shrink' />
              <span className="grow text-left">Home</span>
            </li>
            <li className="h-10 w-full flex items-center justify-start gap-3 rounded-md !px-4 !mb-7 cursor-pointer duration-300 ease-in-out hover:bg-[#20505E]">
              <User size={16} className='shrink' />
              <span className="grow text-left">Usuários</span>
            </li>
            <li className="h-10 w-full flex items-center justify-start gap-3 rounded-md !px-4 !mb-7 cursor-pointer duration-300 ease-in-out hover:bg-[#20505E]">
              <Package size={16} className='shrink' />
              <span className="grow text-left">Produtos</span>
            </li>
          </ul>
        </div>

        {/* Seção de Logout */}
        <div className="mt-auto flex justify-center">
          <ul className="w-50 text-white text-xs">
            <li className="h-10 w-full flex items-center justify-start gap-3 rounded-md !px-4 !mb-7 cursor-pointer duration-300 ease-in-out hover:bg-[#20505E]">
              <LogOut size={16} className='shrink' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
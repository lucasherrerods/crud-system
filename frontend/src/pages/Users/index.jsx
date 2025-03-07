import { User, Mail, Phone } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Modal from '../../components/Modal'
import { useModal } from '../../contexts/ModalContext'

function Users() {

  //Utilizando contexto criado
  const { open, toggleModal } = useModal()

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <header className='flex items-center justify-between border-b-1 border-b-gray-300 pb-6'>
          <h1 className='text-2xl text-gray-800 font-bold'>Usuários</h1>
          <button className='bg-[#FEAF00] text-sm px-4 py-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-1' onClick={toggleModal}>Adicionar usuário</button>
        </header>
        <div className='pt-6'>
          <ul className='flex items-center justify-around text-xs'>
            <li>Nome</li>
            <li>E-mail</li>
            <li>Telefone</li>
            <li>Status</li>
          </ul>
        </div>
        <Modal open={open} onClose={toggleModal}>
          <div className='text-center w-140 flex flex-col gap-10'>
            <div className='mx-auto my-4'>
              <h3 className='text-lg text-gray-800'>Adicionar Usuário</h3>
            </div>
            <form className='flex flex-col gap-5 text-xs text-black'>
              <div className='flex items-center gap-3'>
                <User size={16} />
                <input type="text" placeholder='Nome' className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400' />
              </div>
              <div className='flex items-center gap-3'>
                <Mail size={16} />
                <input type="email" placeholder='E-mail' className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400' />
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={16} />
                <input type="number" placeholder='Telefone' className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400' />
              </div>
            </form>
            <div className='flex items-center justify-around pt-6 text-xs'>
              <button className='py-2 px-4 cursor-pointer bg-gray-200 transition-all ease-in-out duration-200 rounded-lg hover:scale-105' onClick={toggleModal}>Cancelar</button>
              <button className='py-2 px-4 cursor-pointer bg-green-500 text-white transition-all ease-in-out duration-200 rounded-lg hover:scale-105'>Salvar</button>
            </div>
          </div>
        </Modal>
      </Main>
    </div>
  )
}

export default Users
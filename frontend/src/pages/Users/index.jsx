import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

function Users() {

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <header className='flex items-center justify-between border-b-1 border-b-gray-300 pb-6'>
          <h1 className='text-2xl text-gray-800 font-bold'>Usuários</h1>
          <button className='bg-[#FEAF00] text-sm px-4 py-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-1'>Adicionar usuário</button>
        </header>
        <div className='pt-6'>
          <ul className='flex items-center justify-around text-xs'>
            <li>Nome</li>
            <li>E-mail</li>
            <li>Telefone</li>
            <li>Status</li>
          </ul>
        </div>
      </Main>
    </div>
  )
}

export default Users
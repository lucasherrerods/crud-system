import { User, Mail, Phone, PencilLine, Trash } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Modal from '../../components/Modal'
import { useModal } from '../../contexts/ModalContext'
import { useState, useEffect } from 'react'
import { createUsers, showUsers, deleteUsers } from '../../services/users'
import { ToastContainer, toast } from 'react-toastify'

function Users() {
  //Card de notificações dinâmicas
  const notify = (msg, type) => toast[type](msg, { position: 'bottom-left', autoClose: 1500, theme: 'light' })

  const [allUsers, setAllUsers] = useState()

  useEffect(() => {

    async function loadUsers() {
      //Esperando a requisição GET e passando o resultado dentro do estado
      const users = await showUsers()

      setAllUsers(users)
    }

    loadUsers()
  }, [])

  //Utilizando contexto criado
  const { open, toggleModal } = useModal()

  //Estado inicial do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, //Mantém o valor que o input ja possui
      [e.target.name]: e.target.value //Atualiza o campo
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newUser = await createUsers(formData) //Chama a função importada e envia os dados preenchidos no form
      notify('Usuário criado com sucesso!', 'success')
      toggleModal()
      setFormData({ name: '', email: '', phone: '' }) //Reseta o form

      setAllUsers((prevUsers) => [...prevUsers, newUser]) //Adicionando novo usuário na exibição da página
    } catch (error) {
      notify(error.message, 'error')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteUsers(id)
      notify('Usuário deletado com sucesso!', 'success')

      setAllUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
    } catch (error) {
      notify(error.message, 'error')
    }
  }

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <header className='flex items-center justify-between pb-6'>
          <h1 className='text-2xl text-gray-800 font-bold'>Usuários</h1>
          <button className='bg-[#FEAF00] text-sm px-4 py-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-1' onClick={toggleModal}>Adicionar usuário</button>
        </header>
        <div className='pt-6'>
          <ul className='flex items-center justify-around text-xs bg-sky-950 text-white py-3'>
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
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-xs text-black'>
              <div className='flex items-center gap-3'>
                <User size={16} />
                <input
                  type="text"
                  placeholder='Nome'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center gap-3'>
                <Mail size={16} />
                <input
                  type="email"
                  placeholder='E-mail'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={16} />
                <input
                  type="number"
                  placeholder='Telefone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center justify-around pt-6 text-xs'>
                <button type='button' className='py-2 px-4 cursor-pointer bg-gray-200 transition-all ease-in-out duration-200 rounded-lg hover:scale-105' onClick={toggleModal}>Cancelar</button>
                <button type='submit' className='py-2 px-4 cursor-pointer bg-green-500 text-white transition-all ease-in-out duration-200 rounded-lg hover:scale-105'>Salvar</button>
              </div>
            </form>
          </div>
        </Modal>
        <div className='mt-8 relative'>
          <ul className='flex flex-col gap-5 text-sm'>
            {allUsers && allUsers.length > 0 && allUsers.map((user) => (
              <li key={user.id} className='group grid grid-cols-4 text-center py-3 border-b-1 shadow-xs border-gray-200 transition-all ease-in-out duration-200 hover:shadow-md'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone ? user.phone : '-'}</p>
                <p className={`font-bold ${user.isActive ? 'text-green-400' : 'text-red-400'}`}>{user.isActive ? 'Ativo' : 'Inativo'}</p>
                <div className='absolute right-0 flex gap-4 mr-4 transition-all ease-in-out duration-600 opacity-0 group-hover:opacity-100'>
                  <p><PencilLine size={14} className='cursor-pointer transition-all ease-in-out duration-200 hover:scale-110' /></p>
                  <p><Trash size={14} className='cursor-pointer transition-all ease-in-out duration-200 text-red-400 hover:scale-110' onClick={() => handleDelete(user.id)} /></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Main>
      <ToastContainer />
    </div>
  )
}

export default Users
import { ShoppingBasket, CircleDollarSign, AlignStartVertical, Layers, PencilLine, Trash } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import Modal from '../../components/Modal'
import { useModal } from '../../contexts/ModalContext'
import { useState, useEffect } from 'react'
import { createProduct, showProducts, deleteProduct, updateProduct } from '../../services/products'
import { ToastContainer, toast } from 'react-toastify'

function Products() {
  //Card de notificações dinâmicas
  const notify = (msg, type) => toast[type](msg, { position: 'bottom-left', autoClose: 1500, theme: 'light' })

  const [allProducts, setAllProducts] = useState()

  const [selectedProduct, setSelectedProduct] = useState(null)

  const loadProducts = async () => {
    //Esperando a requisição GET e passando o resultado dentro do estado
    const product = await showProducts()
    setAllProducts(product)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  //Utilizando contexto criado
  const { open, toggleModal } = useModal()

  //Estado inicial do formulário
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: 1
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, //Mantém o valor que o input ja possui
      [e.target.name]: e.target.value //Atualiza o campo
    })
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setFormData(product)
    toggleModal()
    loadProducts()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!formData.name || !formData.price || !formData.stock) {
        return notify('Preencha todas as informações corretamente.', 'error')
      }

      if (selectedProduct) {
        //Se tiver um produto selecionado, atualiza os dados (PUT)
        const editProduct = await updateProduct(selectedProduct.id, formData)
        notify('Produto atualizado com sucesso!', 'success')
        //Se o id do produto atual for o mesmo do editProduct, ele é substituído na tela
        setAllProducts((prevProducts) => prevProducts.map((product) => (
          product.id === editProduct.id ? editProduct : product
        )))
      } else {
        //Se não tiver um produto selecionado, cria um novo (POST)
        const newProduct = await createProduct(formData)
        notify('Produto adicionado com sucesso!', 'success')
        setAllProducts((prevProducts) => [...prevProducts, newProduct]) //Adicionando novo produto na exibição da página
      }

      toggleModal()
      setFormData({ name: '', price: '', category: '', stock: 1 }) //Reseta o form
      setSelectedProduct(null)

    } catch (error) {
      notify(error.message, 'error')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id)
      notify('Produto deletado com sucesso!', 'success')

      setAllProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
    } catch (error) {
      notify(error.message, 'error')
    }
  }

  return (
    <div>
      <Sidebar></Sidebar>
      <Main>
        <header className='flex items-center justify-between pb-6'>
          <h1 className='text-2xl text-gray-800 font-bold'>Produtos</h1>
          <button className='bg-[#FEAF00] text-sm px-4 py-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-1' onClick={toggleModal}>Adicionar produto</button>
        </header>
        <div className='pt-6'>
          <ul className='flex items-center justify-around text-xs bg-sky-950 text-white py-3'>
            <li className="w-1/4 text-center">Nome</li>
            <li className="w-1/4 text-center">Preço</li>
            <li className="w-1/4 text-center">Categoria</li>
            <li className="w-1/4 text-center">Quantidade</li>
          </ul>
        </div>
        <Modal open={open}>
          <div className='text-center w-140 flex flex-col gap-10'>
            <div className='mx-auto my-4'>
              <h3 className='text-lg text-gray-800'>{selectedProduct ? 'Atualizar' : 'Adicionar'} Produtos</h3>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-xs text-black'>
              <div className='flex items-center gap-3'>
                <ShoppingBasket size={16} />
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
                <CircleDollarSign size={16} />
                <input
                  type="number"
                  placeholder='`Preço'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center gap-3'>
                <AlignStartVertical size={16} />
                <input
                  type="text"
                  placeholder='Categoria'
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center gap-3'>
                <Layers size={16} />
                <input
                  type="number"
                  placeholder='Quantidade'
                  name='stock'
                  value={formData.stock}
                  onChange={handleChange}
                  className='w-full p-2 rounded-lg transition-all ease-in-out duration-200 outline-0 border border-gray-200 focus:border-sky-400'
                />
              </div>
              <div className='flex items-center justify-around pt-6 text-xs'>
                <button
                  type='button' className='py-2 px-4 cursor-pointer bg-gray-200 transition-all ease-in-out duration-200 rounded-lg hover:scale-105'
                  onClick={() => {
                    toggleModal()
                    setFormData({ name: '', price: '', category: '', stock: 1 })
                    setSelectedProduct(null)
                  }}>
                  Cancelar
                </button>
                <button type='submit' className='py-2 px-4 cursor-pointer bg-green-500 text-white transition-all ease-in-out duration-200 rounded-lg hover:scale-105'>{selectedProduct ? 'Atualizar' : 'Salvar'}</button>
              </div>
            </form>
          </div>
        </Modal>
        <div className='mt-8 relative'>
          <ul className='flex flex-col gap-5 text-sm'>
            {allProducts && allProducts.length > 0 && allProducts.map((product) => (
              <li key={product.id} className='group grid grid-cols-4 text-center py-3 border-b-1 shadow-xs border-gray-200 transition-all ease-in-out duration-200 hover:shadow-md'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.category ? product.category : '-'}</p>
                <p>{product.stock} un.</p>
                <div className='absolute right-0 flex gap-4 mr-4 transition-all ease-in-out duration-600 opacity-0 group-hover:opacity-100'>
                  <p><PencilLine size={14} className='cursor-pointer transition-all ease-in-out duration-200 hover:scale-110' onClick={() => handleEdit(product)} /></p>
                  <p><Trash size={14} className='cursor-pointer transition-all ease-in-out duration-200 text-red-400 hover:scale-110' onClick={() => handleDelete(product.id)} /></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Main>
      <ToastContainer />
    </div >
  )
}

export default Products
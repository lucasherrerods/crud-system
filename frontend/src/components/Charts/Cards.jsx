import { useState, useEffect, use } from "react"
import { showUsers } from "../../services/users.js"
import { showProducts } from '../../services/products.js'

function Cards() {
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])

  //Enviando as informações dos endpoints para meus estados
  const getData = async () => {
    const usersData = await showUsers()
    const productsData = await showProducts()

    setUsers(usersData)
    setProducts(productsData)
  }

  //Invocando as funções ao carregar a página
  useEffect(() => {
    getData()
  }, [])

  //Filtrando os dados retornados
  const activeUsers = users.filter((user) => user.isActive === true).length
  const inactiveUsers = users.filter((user) => user.isActive === false).length
  const totalProducts = products.length

  //Garante que sempre seja um array, mesmo se não retornar nada no estoque
  function inStock() {
    const stock = products?.map((product) => product.stock) || []
    const sum = stock.reduce((sum, num) => sum + num, 0)

    return sum
  }

  return (
    <div className='p-6'>
      <div className='flex gap-8'>
        <div className='flex-1 bg-green-500 p-4 rounded-lg shadow-md text-center'>
          <p className='text-2xl font-bold text-white'>{activeUsers}</p>
          <h3 className='text-sm font-semibold text-gray-200 capitalize'>usuários ativos</h3>
        </div>
        <div className='flex-1 bg-red-400 p-4 rounded-lg shadow-md text-center'>
          <p className='text-2xl font-bold text-white'>{inactiveUsers}</p>
          <h3 className='text-sm font-semibold text-gray-200 capitalize'>usuários inativos</h3>
        </div>
        <div className='flex-1 bg-blue-500 p-4 rounded-lg shadow-md text-center'>
          <p className='text-2xl font-bold text-white'>{totalProducts}</p>
          <h3 className='text-sm font-semibold text-gray-200 capitalize'>total de produtos</h3>
        </div>
        <div className='flex-1 bg-yellow-400 p-4 rounded-lg shadow-md text-center'>
          <p className='text-2xl font-bold text-white'>{inStock()}</p>
          <h3 className='text-sm font-semibold text-gray-200 capitalize'>produtos em estoque</h3>
        </div>
      </div>
    </div>
  )
}

export default Cards
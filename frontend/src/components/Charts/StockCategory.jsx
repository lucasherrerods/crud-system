import { useEffect, useState } from 'react'
import { showProducts } from '../../services/products'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const StockCategory = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const productsData = await showProducts()
    setProducts(productsData)
  }

  useEffect(() => {
    getProducts()
  }, [])

  //Ordenando os dados por categoria
  const categoryData = products.reduce((acc, product) => {
    const hasCategory = acc.find(item => item.name === product.category) //Verifica se a categoria já existe

    if (hasCategory) {
      //Se já existir, soma o estoque da categoria
      hasCategory.stock += product.stock
    } else {
      //Se não existir, cria um novo objeto
      acc.push({ name: product.category, stock: product.stock })
    }

    return acc
  }, [])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#32CD32'] //Cores aleatórias pra preenchimento das células


  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          dataKey="stock"
          paddingAngle={5}
        >
          {categoryData.map((empty, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default StockCategory
import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import { showProducts } from "../../services/products"

function AvgPrice() {
  const [data, setData] = useState([])

  const getProducts = async () => {
    try {
      const products = await showProducts()
      setData(products)
    } catch (error) {
      console.error("Erro ao buscar produtos:", error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  //Garantindo que o estado não está vazio antes de processar
  const agroupProducts = data.reduce((acc, product) => {
    const { category, price } = product

    //Se a categoria ainda não existe no acc, cria um objeto com a categoria, o acc total e contagem dos produtos
    if (!acc[category]) {
      acc[category] = { category, total: 0, count: 0 }
    }

    acc[category].total += price
    acc[category].count += 1

    return acc //Retorna o número acumulado no final
  }, {}) //Inicia como um objeto vazio


  //Transforma o objeto em um array de categorias e calcula a média de preço
  const categoryStats = Object.keys(agroupProducts).map((category) => ({
    category,
    avgPrice: agroupProducts[category].total / agroupProducts[category].count
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={categoryStats}>
        <XAxis dataKey="category" />
        <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
        <Bar dataKey="avgPrice" fill="#4BC0C0" name="Preço Médio" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default AvgPrice
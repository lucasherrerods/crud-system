//POST
export const createProduct = async (productsData) => {

  try {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productsData)
    })

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw error
  }
}

//GET
export const showProducts = async () => {

  try {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()

    return data.products
  } catch (error) {
    console.error('Erro na requisição:', error)
  }
}

//DELETE
export const deleteProduct = async (id) => {

  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    })

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw new Error('Erro ao deletar produto, tente novamente.')
  }
}

//PUT
export const updateProduct = async (id, updateData) => {

  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw new Error('Erro ao atualizar produto, tente novamente.')
  }
}
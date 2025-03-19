export const createUsers = async (usersData) => {

  //POST
  try {

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usersData),
    })

    if (!response.ok) {
      throw new Error('Este e-mail já está cadastrado, tente novamente.')
    }

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw error
  }
}

//GET
export const showUsers = async () => {

  try {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data.users
  } catch (error) {
    console.error('Erro na requisição:', error)
  }
}

//DELETE
export const deleteUsers = async (id) => {

  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE'
    })

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw new Error('Erro ao deletar usuário, tente novamente.')
  }
}

//PUT 
export const updateUser = async (id, updateData) => {

  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw new Error('Erro ao atualizar usuário, tente novamente.')
  }
}
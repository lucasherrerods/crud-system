export const createUsers = async (usersData) => {

  try {

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usersData),
    })

    if (!response.ok) {
      throw new Error('Erro ao criar usuário.')
    }

    return await response.json()
  } catch (error) {
    console.error('Erro na requisiação:', error)
    throw error
  }
}
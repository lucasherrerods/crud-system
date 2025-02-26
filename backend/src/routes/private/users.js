import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

//Adicionando usuários
router.post('/', async (req, res) => {

  try {
    const user = await prisma.tab_users.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        isActive: req.body.isActive === "true" //Convertendo string para boolean
      }
    })

    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao tentar cadastrar usuário, tente novamente' })
  }
})

//Listando usuários
router.get('/', async (req, res) => {

  try {
    const users = await prisma.tab_users.findMany()

    res.status(200).json({ message: 'Listando os usuários:', users })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao tentar consultar usuários, tente novamente' })
  }
})

//Atualizando usuários
router.put('/:id', async (req, res) => {

  try {
    const user = await prisma.tab_users.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        isActive: req.body.isActive === "true"
      }
    })

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao tentar atualizar usuário, tente novamente' })
  }
})

//Deletando usuários
router.delete('/:id', async (req, res) => {

  try {
    const user = await prisma.tab_users.delete({
      where: { id: req.params.id }
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso', user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao tentar deletar usuário, tente novamente' })
  }
})

export default router
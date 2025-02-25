import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

//Adicionando usuários
const users = []
router.post('/', async (req, res) => {

  const user = await prisma.tab_users.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    }
  })

  res.status(201).json(user)
})

//Listando usuários
router.get('/', async (req, res) => {

  const users = await prisma.tab_users.findMany()

  res.status(200).json({ message: 'Listando os usuários:', users })
})

//Deletando usuários
router.delete('/:id', async (req, res) => {

  const user = await prisma.tab_users.delete({
    where: { id: req.params.id }
  })

  res.status(200).json({ message: 'Usuário deletado com sucesso', user })
})

export default router
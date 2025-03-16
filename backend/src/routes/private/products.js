import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

//Adicionando produtos
router.post('/', async (req, res) => {

  try {
    const product = await prisma.tab_products.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: req.body.category,
        stock: parseInt(req.body.stock, 10)
      }
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar registrar produto, tente novamente' })
  }
})

//Listando produtos
router.get('/', async (req, res) => {

  try {
    const products = await prisma.tab_products.findMany()

    res.status(200).json({ message: 'Produtos listados com sucesso', products })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar listar produtos, tente novamente' })
  }
})

//Atualizando produtos
router.put('/:id', async (req, res) => {

  try {
    const product = await prisma.tab_products.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        category: req.body.category,
        stock: parseInt(req.body.stock, 10)
      }
    })

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar atualizar produto, tente novamente' })
  }
})

//Deletando produtos
router.delete('/:id', async (req, res) => {

  try {
    const product = await prisma.tab_products.delete({
      where: { id: req.params.id }
    })

    res.status(200).json({ message: 'Produto deletado com sucesso', product })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar deletar produto, tente novamente' })
  }
})

export default router
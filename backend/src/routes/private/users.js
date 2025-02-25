import express from 'express'
const router = express.Router()

//Adicionando usuários
const users = []
router.post('/', (req, res) => {

  users.push({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  res.status(201).json(req.body)
})

//Listando usuários
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Listando os usuários', users })
})

export default router
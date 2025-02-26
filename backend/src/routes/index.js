import express from 'express'
const router = express.Router()

//importando rotas privadas
import usersRoute from './private/users.js'
import productsRoute from './private/products.js'

router.use('/users', usersRoute)
router.use('/products', productsRoute)

export default router
import express from 'express'
const router = express.Router()

//importando rota de usuários
import usersRoute from './private/users.js'

router.use('/users', usersRoute)

export default router
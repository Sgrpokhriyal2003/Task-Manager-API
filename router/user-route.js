import express from 'express'
import { signup, login, logout } from '../controller/user-controller.js'

const router = express.Router()

//signup route
router.post("/signup", signup)

//login
router.post("/login", login)

//logout
router.get("/logout", logout)

export default router
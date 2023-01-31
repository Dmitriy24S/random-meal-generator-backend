import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import UserController from './controllers/UserController.js'
import checkAuth from './validation/checkAuth.js'
import handleValidationErrors from './validation/handleValidationErrors.js'
import { registerValidation } from './validation/validations.js'

dotenv.config()

// MongoDB
mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB - OK')
  })
  .catch((error) => {
    console.log('DB - ERROR', error)
  })

// Server
const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// User - Registration, Login, Auth
app.post(
  '/meal/auth/register',
  registerValidation,
  handleValidationErrors,
  UserController.register
)
app.get('/meal/auth/me', checkAuth, UserController.getAuth)

// Other
app.use('*', (req, res) => res.status(404).json({ error: 'route not found' }))

// Launch Server
app.listen(process.env.PORT || 4444, (error) => {
  if (error) {
    return console.log('SERVER - ERROR', error)
  }
  console.log('SERVER - OK')
})

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

export default class UserController {
  // export const register = async (req, res) => {
  static async register(req, res) {
    try {
      console.log('register - req,body', req.body)

      const password = req.body.password
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt) // encrypt password

      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        passwordHash: hash,
      })

      const user = await doc.save() // create in MongoDB

      const token = jwt.sign(
        {
          _id: user._id,
        },
        'secret123',
        {
          expiresIn: '30d',
        }
      )

      const { passwordHash, ...userData } = user._doc // prevent password return

      // OK:
      res.json({
        success: true,
        ...userData,
      })

      //   http://localhost:4444/meal/auth/register
      //   {
      // "name": "hi",
      // "email": "yo@yo.com",
      // "password": "tesdt1"
      // }

      //   {
      //     "success": true,
      //     "name": "hi",
      //     "email": "yo@yo.com",
      //     "_id": "63d6e46c702c0d55ee7c0fda",
      //     "__v": 0
      // }
    } catch (error) {
      console.log('register - user controller - error')
      res.status(500).json({
        success: false,
        msg: 'Unable to register'.error,
      })
    }
  }
}

import BookmarkModel from '../models/BookmarkModel.js'
import UserModel from '../models/UserModel.js'

export default class BookmarksController {
  static async addBookmark(req, res) {
    try {
      console.log('start add bookmark')
      console.log('req body', req.body)
      // ! not needed for user ???
      //   const user = await UserModel.findById(req.userId)
      //   if (!user) {
      //     return res.status(404).json({
      //       message: 'User not found',
      //     })
      //   }
      // prevent returning password
      //   const { passwordHash, ...userData } = user._doc
      // if all ok
      //   res.json({
      //     success: true,
      //     ...userData,
      //   })
      const doc = new BookmarkModel({
        user: req.userId,
        ...req.body,
      })
      console.log('doc', doc)
      const bookmarkedMeal = await doc.save()
      // if all ok:
      res.json({
        success: true,
        bookmarkedMeal,
      })
    } catch (error) {
      console.log('add bookmark - error', error)
      res.status(500).json({
        success: false,
        message: 'Unable to add bookmark',
        error,
      })
    }
  }
}

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

  static async getBookmarks(req, res) {
    try {
      console.log('start get bookmarks')
      const bookmarks = await BookmarkModel.find({ user: req.userId })
      console.log('bookmarks', bookmarks)
      // bookmarks [
      //     {
      //       _id: new ObjectId("63db773423af08e11aa91b7a"),
      //       user: new ObjectId("63d8fc3dfb4ed0e3538c0312"),
      //       idMeal: '111test',
      //       strMeal: '111test',
      //       ...
      // }, ...
      if (!bookmarks) {
        //     res.json({
        //       success: false,
        //       message: 'Unable to find bookmarks this user?',
        //     })
        return res.status(404).json({
          message: 'Bookmarks for user not found',
        })
      }
      //   if (bookmarks) {
      //     return res.send(bookmarks)
      //   }
      // if all ok:
      res.json({
        success: true,
        // ...userData,
        // user,
        bookmarks,
      })
    } catch (error) {
      console.log('get bookmarks - error', error)
      res.status(500).json({
        success: false,
        message: 'Unable to get bookmarks',
        error,
      })
    }
  }

  static async removeBookmark(req, res) {
    try {
      const bookmarkId = req.params.id
      console.log('remove bookmarkd idMeal?:', bookmarkId)
      // const deletedBookmark = await BookmarkModel.findOneAndDelete({ _id: bookmarkId, user: req.userId })
      BookmarkModel.findOneAndDelete(
        // { _id: bookmarkId, user: req.userId },
        // ! not doc id, but api item id?
        { idMeal: bookmarkId, user: req.userId },
        (error, doc) => {
          // actions to take:

          // if error
          if (error) {
            console.log(err)
            return res.status(500).json({
              message: 'Failed to delete bookmark',
            })
          }

          // check for undefined? -> return error
          if (!doc) {
            console.log(err)
            return res.status(500).json({
              message: 'Bookmark not found',
            })
          }

          console.log('bookmark delete doc:', doc)

          // if all ok:
          res.json({
            success: true,
            message: 'Bookmark deleted',
            id: bookmarkId,
          })
        }
      )
    } catch (error) {
      console.log('remove bookmark - error', error)
      res.status(500).json({
        success: false,
        message: 'Unable to remove bookmark',
        error,
      })
    }
  }
}

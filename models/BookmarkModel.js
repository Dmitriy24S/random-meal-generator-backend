import mongoose from 'mongoose'

const BookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    idMeal: {
      type: String,
      required: true,
      unique: true,
    },
    strMeal: {
      type: String,
      required: true,
    },
    strDrinkAlternate: {
      type: String,
      default: null,
    },
    strCategory: {
      type: String,
      default: '',
    },
    strArea: {
      type: String,
      default: '',
    },
    strInstructions: {
      type: String,
      default: '',
    },
    strMealThumb: {
      type: String,
      default: '',
    },
    strTags: {
      type: String,
      default: '',
    },
    strYoutube: {
      type: String,
      default: '',
    },
    strIngredient1: {
      type: String,
      default: '',
    },
    strIngredient2: {
      type: String,
      default: '',
    },
    strIngredient3: {
      type: String,
      default: '',
    },
    strIngredient4: {
      type: String,
      default: '',
    },
    strIngredient5: {
      type: String,
      default: '',
    },
    strIngredient6: {
      type: String,
      default: '',
    },
    strIngredient7: {
      type: String,
      default: '',
    },
    strIngredient8: {
      type: String,
      default: '',
    },
    strIngredient9: {
      type: String,
      default: '',
    },
    strIngredient10: {
      type: String,
      default: '',
    },
    strIngredient11: {
      type: String,
      default: '',
    },
    strIngredient12: {
      type: String,
      default: '',
    },
    strIngredient13: {
      type: String,
      default: '',
    },
    strIngredient14: {
      type: String,
      default: '',
    },
    strIngredient15: {
      type: String,
      default: '',
    },
    strIngredient16: {
      type: String,
      default: '',
    },
    strIngredient17: {
      type: String,
      default: '',
    },
    strIngredient18: {
      type: String,
      default: '',
    },
    strIngredient19: {
      type: String,
      default: '',
    },
    strIngredient20: {
      type: String,
      default: '',
    },
    strMeasure1: {
      type: String,
      default: '',
    },
    strMeasure2: {
      type: String,
      default: '',
    },
    strMeasure3: {
      type: String,
      default: '',
    },
    strMeasure4: {
      type: String,
      default: '',
    },
    strMeasure5: {
      type: String,
      default: '',
    },
    strMeasure6: {
      type: String,
      default: '',
    },
    strMeasure7: {
      type: String,
      default: '',
    },
    strMeasure8: {
      type: String,
      default: '',
    },
    strMeasure9: {
      type: String,
      default: '',
    },
    strMeasure10: {
      type: String,
      default: '',
    },
    strMeasure11: {
      type: String,
      default: '',
    },
    strMeasure12: {
      type: String,
      default: '',
    },
    strMeasure13: {
      type: String,
      default: '',
    },
    strMeasure14: {
      type: String,
      default: '',
    },
    strMeasure15: {
      type: String,
      default: '',
    },
    strMeasure16: {
      type: String,
      default: '',
    },
    strMeasure17: {
      type: String,
      default: '',
    },
    strMeasure18: {
      type: String,
      default: '',
    },
    strMeasure19: {
      type: String,
      default: '',
    },
    strMeasure20: {
      type: String,
      default: '',
    },
    strSource: {
      type: String,
      default: '',
    },
    strImageSource: {
      type: String,
      default: '',
    },
    strCreativeCommonsConfirmed: {
      type: String,
      default: '',
    },
    dateModified: {
      type: Date || String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Bookmark', BookmarkSchema)

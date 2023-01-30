import { validationResult } from 'express-validator'

export default (req, res, next) => {
  // if error -> stop future actions
  const errors = validationResult(req) // ?
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }
  // [
  // 	{
  // 		"value": "1",
  // 		"msg": "Email is required",
  // 		"param": "email",
  // 		"location": "body"
  // 	}
  // ]

  // if no error -> continue
  next()
}

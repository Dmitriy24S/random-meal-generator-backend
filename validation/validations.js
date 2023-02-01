import { body, check } from 'express-validator'

export const registerValidation = [
  // check:
  // (alias) check(fields?: string | string[] | undefined, message?: any): ValidationChain
  // import check
  // Creates a middleware/validation chain for one or more fields that may be located in any of the following:

  // req.body
  // req.cookies
  // req.headers
  // req.params
  // req.query
  // @param fields — a string or array of field names to validate/sanitize

  // @param message
  // an error message to use when failed validations don't specify a custom message. Defaults to Invalid Value.
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').isLength({ min: 4 }),
]

export const loginValidation = [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').isLength({ min: 4 }),
]

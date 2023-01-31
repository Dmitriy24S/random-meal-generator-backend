import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '') // if no token -> undefined -> to prevent return ""

  // if get token -> need to decode it
  if (token) {
    try {
      const decodedToken = jwt.verify(token, 'secret123')
      req.userId = decodedToken._id
      // console.log('userid', req.userId)
      next() // as middleware -> proceed to next function
    } catch {}
  } else {
    // If no token (add return to avoid reaching other code)
    return res.status(403).json({
      message: 'No access',
    })
  }
}

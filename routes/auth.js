const express = require('express')
const router = express.Router()

// import validators
const {
  userRegisterValidator,
  userLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require('../validators/auth')
const { runValidation } = require('../validators/index')

// import from controllers
const {
  register,
  registerActivate,
  login,
  requireSignin,
  authMiddleware,
  adminMiddleware,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth')

router.post('/register', userRegisterValidator, runValidation, register)
router.post('/register/activate', registerActivate)
router.post('/login', userLoginValidator, runValidation, login)
router.put(
  '/forgot-password',
  forgotPasswordValidator,
  runValidation,
  forgotPassword
)
router.put(
  '/reset-password',
  resetPasswordValidator,
  runValidation,
  resetPassword
)

// router.get('/secret', requireSignin, (req, res) => {
//   res.json({
//     data: 'hfhf hfhfh hfhfh',
//   })
// })
module.exports = router

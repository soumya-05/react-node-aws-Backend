const express = require('express')
const router = express.Router()

// import middlewares
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require('../controllers/auth')
// import controllers
const { read, update } = require('../controllers/user')
const { runValidation } = require('../validators')
const { userUpdateValidator } = require('../validators/auth')

// routes
router.get('/user', requireSignin, authMiddleware, read)
router.get('/admin', requireSignin, adminMiddleware, read)
router.put(
  '/user',
  userUpdateValidator,
  runValidation,
  requireSignin,
  authMiddleware,
  update
)

module.exports = router

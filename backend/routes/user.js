const express = require('express');
const { register, activateAccount, login, resendVerificationEmail, forgotPassword, resetPassword } = require('../controllers/userController');
// const { authenticateUser } = require('../middleware/auth');
const router = express.Router();

// User model

router.post('/register', register);
router.post('/activate', activateAccount);
router.post('/login', login);
router.post('/resendActivation', resendVerificationEmail);
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', resetPassword)
// router.post('/auth', authenticateUser, authentification);



module.exports = router;
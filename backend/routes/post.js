const express = require('express');
const { createPost } = require('../controllers/postController');
const { authenticateUser } = require('../middleware/auth');
const router = express.Router();

// User model

router.post('/createPost', createPost);

module.exports = router;
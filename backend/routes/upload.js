const express = require('express');
const { uploadImages } = require('../controllers/uploadController');
const { authenticateUser } = require('../middleware/auth');
const imageUpload = require('../middleware/imageUpload');
const router = express.Router();

// User model

router.post('/uploadImages', imageUpload, uploadImages);

module.exports = router;
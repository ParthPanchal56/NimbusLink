const fs = require('fs');

module.exports = async (req, res, next) => {
    try {
        if (!req.files || Object.values(req.files).flat().length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No files were selected.',
            });
        }

        let files = Object.values(req.files).flat();
        const validFileTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
        const invalidFiles = [];

        // Validate file types
        for (const file of files) {
            if (!validFileTypes.includes(file.mimetype)) {
                removeTmp(file.tempFilePath);
                invalidFiles.push(file.originalname);
            }
        }

        if (invalidFiles.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Invalid file type(s). The following files should be jpeg, png, jpg, gif, or webp: ${invalidFiles.join(', ')}`,
            });
        }

        // Validate file size

        const maxSize = 1024 * 1024 * 5; // 5MB

        for (const file of files) {
            if (file.size > maxSize) {
                removeTmp(file.tempFilePath);
                invalidFiles.push(file.originalname);
                return res.status(400).json({
                    success: false,
                    message: `File size too large. The following files should be less than 5MB: ${invalidFiles.join(', ')}`,
                });
            }
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};
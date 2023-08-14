const cloudinary = require('cloudinary');
const fs = require('fs');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


exports.uploadImages = async (req, res) => {
    try {

        const { path } = req.body;
        let files = Object.values(req.files).flat();
        let images = [];

        for (const file of files) {
            const url = await uploadToCloudinary(file, path);
            images.push(url);
            removeTmp(file.tempFilePath);
        }
        res.json({
            // success: true,
            // message: 'Images uploaded successfully.',
            images,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const uploadToCloudinary = async (file, path) => {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file.tempFilePath,
            {
                folder: path,
            },
            (err, result) => {
                if (err) {
                    removeTmp(file.tempFilePath);
                    return res.status(400).json({
                        success: false,
                        message: `Image upload failed.`,
                    });
                }
                resolve({
                    public_id: result.public_id,
                    url: result.secure_url,
                });


            }
        );
    });
}


const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

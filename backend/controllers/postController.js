const Post = require("../models/PostModel");


exports.createPost = async (req, res) => {
    try {
        const post = await new Post({
            ...req.body,
        }).save();

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errorCode: error.code,
            message: error.message,
        });
    }
}
const jwt = require('jsonwebtoken');


exports.authenticateUser = async (req, res, next) => {
    try {
        let token = req.header('authorization');
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: err.message || 'Invalid Token',
                });
            }
            else {
                req.user = decoded;
                next();
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


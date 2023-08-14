const { sendVerificationEmail } = require('../helpers/mailer');
const { generateToken } = require('../helpers/tokens');
const { validateEmail, validatelength } = require('../helpers/validations');
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// ########################################## Generate OTP Start ########################################## //

const generateOTP = async () => {
    const min = 100000;
    const max = 999999;
    const otp = await Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(otp);
    return otp;
};

// ########################################## Register Start ########################################## //

exports.register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            gender,
            birth_date,
        } = req.body;

        // ------------------------------ Validating the inputs ------------------------------ //

        if (validatelength(first_name, 2, 20) === false) {
            return res.status(400).json({
                success: false,
                message: 'First name must be between 2 and 20 characters',
            });
        }

        if (validatelength(last_name, 2, 20) === false) {
            return res.status(400).json({
                success: false,
                message: 'Last name must be between 2 and 20 characters',
            });
        }

        if (validatelength(username, 6, 20) === false) {
            return res.status(400).json({
                success: false,
                message: 'Username must be between 6 and 20 characters',
            });
        }

        if (validatelength(password, 6, 30) === false) {
            return res.status(400).json({
                success: false,
                message: 'Password must be between 6 and 20 characters',
            });
        }


        // ------------------------------ Validating email ------------------------------ //

        if (!validateEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // -------------------------- Checking if email already exists --------------------------- //

        const checkEmailIfExists = await User.findOne({ email });
        if (checkEmailIfExists) {
            return res.status(400).json({
                success: false,
                message: 'The email already exists, please try another email',
            });
        }

        // -------------------------- Checking if username already exists --------------------------- //

        const checkUsernameIfExists = await User.findOne({ username });
        if (checkUsernameIfExists) {
            return res.status(400).json({
                success: false,
                message: 'The username already exists, please try another username',
            });
        }

        // -------------------------- Encrpting password --------------------------- //

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);


        // Generating an OTP for email verification

        // -------------------------- Register new user --------------------------- //

        const user = await new User({
            first_name,
            last_name,
            username,
            email,
            password: hashedPassword,
            gender,
            birth_date,
            otp: (await generateOTP()).toString(),
        }).save();

        console.log(user, "----------------------");

        // -------------------------- Sending Email Verification Token --------------------------- //

        // const emailVerficationToken = generateToken({ id: user._id.toString() }, '1d');
        const emailVerficationToken = user.otp;
        const name = user.first_name;
        const subject = "Account Activation Request";
        const purpose = "You are receiving this email because you requested to activate your NimbusLink account.";
        const description = "Please enter the following OTP to activate your account.";
        sendVerificationEmail(user.email, name, subject, purpose, description, emailVerficationToken);
        console.log(emailVerficationToken, "------++++++++++++++++++++");

        const loginVerficationToken = generateToken({ id: user._id.toString() }, '7d');

        res.send({
            success: true,
            id: user._id,
            username: user.username,
            profile_picture: user.profile_picture,
            first_name: user.first_name,
            last_name: user.last_name,
            token: loginVerficationToken,
            verified: user.verified,
            message: 'User registered successfully, please check your email to verify your account',
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// ########################################## Register End ########################################## //

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ########################################## Activate Account Start ########################################## //

exports.activateAccount = async (req, res) => {
    try {
        const { username, otp } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Username does not exist',
            });
        } else if (user.verified) {
            return res.status(400).json({
                success: false,
                message: 'Account already activated',
            });
        } else if (user.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect OTP',
            });
        } else {
            const newOtp = await generateOTP();
            user.otp = newOtp.toString();
            user.verified = true;
            console.log(user.otp, "----------------------");
            user.save();
            res.json({
                success: true,
                message: 'Account activated successfully. Please login to continue',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};





// ########################################## Activate Account End ########################################## //

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ########################################## Login Start ########################################## //

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Username does not exist',
            });
        }
        if (user.verified == false) {
            return res.status(400).json({
                success: false,
                message: 'Please activate your account first from the link sent to your email',
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect password',
            });
        }
        const loginVerficationToken = generateToken({ id: user._id * Math.random(50).toString() }, '7d');
        res.send({
            success: true,
            id: user._id,
            username: user.username,
            profile_picture: user.profile_picture,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            cover_picture: user.cover_picture,
            birth_date: user.birth_date,
            details: user.details,
            friends: user.friends,
            following: user.following,
            requests: user.requests,
            saved_posts: user.savedPosts,
            search: user.search,
            token: loginVerficationToken,
            verified: user.verified,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// ########################################## Login End ########################################## //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// ########################################## Authentification Start ########################################## //

// exports.authentification = async (req, res) => {
//     res.json("Authentification successfull");
// };


// ########################################## Authentification End ########################################## //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ########################################## Resend Verification Email Start ########################################## //

exports.resendVerificationEmail = async (req, res) => {

    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Username does not exist',
        });
    }
    else if (user.verified == true) {
        return res.status(400).json({
            success: false,
            message: 'Account already activated',
        });
    }
    else {
        const newOtp = await generateOTP();
        user.otp = newOtp.toString();
        user.save();
        console.log(user.otp, `---------NEW OTP GENERATED FOR ${user.first_name} ${user.last_name}------------`);
        const emailVerficationToken = user.otp;
        const name = user.first_name;
        const subject = "Account Activation Request";
        const purpose = "You are receiving this email because you requested to activate your NimbusLink account.";
        const description = "Please enter the following OTP to activate your account.";
        sendVerificationEmail(user.email, name, subject, purpose, description, emailVerficationToken);
        console.log(emailVerficationToken, "------RESEND EMAIL VERIFICATION TOKEN------");
        return res.status(200).json({
            success: true,
            message: 'OTP has been sent on your Email successfully, please verify the OTP to activate your account',
        });
    };

};
// ########################################## Resend Verification Email End ########################################## //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ########################################## Password Reset Mail Start ########################################## //

exports.forgotPassword = async (req, res) => {
    try {
        const { username } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Email Address is not linked to any account.',
            });
        }
        else {
            const newOtp = await generateOTP();
            user.otp = newOtp.toString();
            user.save();
            console.log(user.otp, `---------NEW OTP FOR PASSWORD RESET GENERATED FOR ${user.first_name} ${user.last_name}------------`);
            const emailVerficationToken = user.otp;
            const name = `${user.first_name} ${user.last_name}`;
            const subject = "Password Reset Request";
            const purpose = "You are receiving this email because you requested to reset your password for your NimbusLink account.";
            const description = "Please enter the following OTP to reset your password.";
            sendVerificationEmail(user.email, name, subject, purpose, description, emailVerficationToken);
            console.log(emailVerficationToken, "------PASSWORD RESET EMAIL VERIFICATION TOKEN------");
            return res.status(200).json({
                success: true,
                message: 'OTP has been sent on your Email successfully, please verify the OTP to reset your password',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}





// ########################################## Password Reset Mail End ########################################## //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// ########################################## Password Reset Start ########################################## //

exports.resetPassword = async (req, res) => {

    try {
        const { otp, newPassword } = req.body
        const user = await User.findOne({ otp })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect OTP. Try again',
            });
        }
        else if (user) {
            const nPassword = newPassword.toString();
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(nPassword, salt);
            user.password = hashedPassword;
            user.save();
            return res.status(200).json({
                success: true,
                message: 'Password has been changed successfully.',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


// ########################################## Password Reset End ########################################## //















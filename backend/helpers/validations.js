const User = require("../models/UserModel");
// Validation for email



exports.validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[\w\.-]+@[\w-]+(?:\.[\w-]+)*\.[a-zA-Z]{2,}$/
    );
}

// Validation for length

exports.validatelength = (str, min, max) => {
    if (str.length < min || str.length > max) {
        return false;
    }
    return true;
}

// Validation for username

// exports.validateUsername = async (username) => {
//     let a = false;
//     do {
//         let usernameCheck = await User.findOne({ username: username });
//         if (usernameCheck) {
//             a = true;

//         }
//         else {
//             a = false;
//         }
//     } while (a);
//     return username;
// }

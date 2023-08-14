const mongoose = require('mongoose');
// const default_profile_picture = require('../public/assets/images/default_profile_picture.jpg');
// const default_cover_picture = require('../assets/images/default_cover_image.svg');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        text: true,
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        text: true,
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        text: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    profile_picture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    cover_picture: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        trim: true,
    },
    birth_date: {
        type: String,
        required: [true, 'Birth Date is required'],
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        default: '',
    },
    friends: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: [],
    },
    followers: {
        type: Array,
        default: [],
    },
    requests: {
        type: Array,
        default: [],
    },
    search: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
            },
        }

    ],
    details: {
        bio: {
            type: String,
            default: '',
        },
        other_name: {
            type: String,
            default: '',
        },
        job: {
            type: String,
            default: '',
        },
        workplace: {
            type: String,
            default: '',
        },
        school: {
            type: String,
            default: '',
        },
        college: {
            type: String,
            default: '',
        },
        university: {
            type: String,
            default: '',
        },
        lives_in: {
            type: String,
            default: '',
        },
        from: {
            type: String,
            default: '',
        },
        relationship: {
            type: String,
            enum: ['Single', 'Married', 'Divorced', 'Widowed', 'In a relationship', 'Engaged', 'It\'s complicated'],
        },
        instagram: {
            type: String,
            default: '',
        },
    },
    savedPosts: [
        {
            post: {
                type: ObjectId,
                ref: 'Post',
            },
            savedAt: {
                type: Date,
                default: Date.now,
            },

        }
    ]
},
    { timestamps: true }
);


module.exports = mongoose.model('User', userSchema);






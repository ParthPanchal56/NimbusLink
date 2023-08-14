const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}));

// routes middleware
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));


// Database Connection

mongoose.connect(process.env.DATABASE_URL, {
    dbName: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB Connection Error: ', err));



const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));

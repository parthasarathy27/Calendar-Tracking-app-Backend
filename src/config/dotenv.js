require('dotenv').config();
module.exports = {
    port: process.env.PORT || 8080,
    mongoURI: process.env.MONGO_URI,
};

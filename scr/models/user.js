const mongoose = require('mongoose');

const uesrSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});
const User = mongoose.model('user', uesrSchema);
module.exports = User;

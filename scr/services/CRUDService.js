const connection = require('../config/database');
const getAllUsers = async() => {
    let [results, fields] = await connection.query('SELECT * FROM `User`');
    return results;
}
module.exports = {
    getAllUsers
}
const connection = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `User`');
    return results;
}
const getUserById = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM `User` WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}
const updateUserById = async(email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `
        UPDATE User 
        SET email= ? , city= ? , name= ?
        WHERE id = ?`,
        [email, city, name, userId]);

}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById
}
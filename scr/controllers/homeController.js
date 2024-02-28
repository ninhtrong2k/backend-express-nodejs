const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService')
const getHomepage = async(req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUsers : results})
}

const getABC = (req, res) => {
    let users = []
    connection.query(
        'SELECT * FROM `User` ',
        function (err, results, fields) {
            users = results;
            console.log('log', results);
            console.log(fields);
            res.send(JSON.stringify(users));
        }
    );

}
const getHoiDanIT = (req, res) => {
    res.render('sample');

}

const postCreateUser = async (rq, res) => {
    let email = rq.body.email;
    let name = rq.body.fullname;
    let city = rq.body.city;
    let [results, fields] = await connection.query(
        `INSERT INTO User (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]);
    res.send("Created user suceed");
    console.log(results);
}
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = (req,res) => {
    res.render('edit.ejs');
}
module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage ,getUpdatePage
}
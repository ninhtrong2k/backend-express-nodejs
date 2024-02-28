const connection = require('../config/database');
const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    let users = []
    connection.query(
        'SELECT * FROM `User` ',
        function (err, results, fields) {
            users = results;
            console.log('log',results);  
            console.log(fields);
            res.send(JSON.stringify(users));
        } 
    );
    
}
const getHoiDanIT = (req, res) => {
    res.render('sample'); 

}
module.exports = {
    getHomepage, getABC, getHoiDanIT
}
const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById,
    deleteUserById } = require('../services/CRUDService');
const User = require("../models/user");
const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', { listUsers: results })
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
    await User.create({
        email,
        name,
        city,
    })
    res.send("Created user suceed");
}
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEidt: user });
}

const postUpdateUser = async (rq, res) => {
    let email = rq.body.email;
    let name = rq.body.fullname;
    let city = rq.body.city;
    let userId = rq.body.userId;
    await User.updateOne({ _id: userId }, { email: email , name: name ,city: city  })
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render("delete.ejs", { userEidt: user });

}

const postHandleRemoveUser = async (rq, res) => {
    let userId = rq.body.userId;
    await User.deleteOne({
        _id : userId
    })
    res.redirect('/');

}
module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser,
}
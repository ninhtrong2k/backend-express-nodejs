const User = require("../models/user");
const getusersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            EC: 0,
            data: results
        }
    )
}

const postCreateUserAPI = async (rq, res) => {
    let email = rq.body.email;
    let name = rq.body.fullname;
    let city = rq.body.city;
    let user = await User.create({
        email,
        name,
        city,
    })
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const putUpdateUser = async (rq, res) => {
    let email = rq.body.email;
    let name = rq.body.fullname;
    let city = rq.body.city;
    let userId = rq.body.userId;
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city })
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

const deleteUserAPI = async (rq, res) => {
    let userId = rq.body.userId;
    let result = await User.deleteOne({
        _id : userId
    })
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

module.exports = {
    getusersAPI, postCreateUserAPI , putUpdateUser , deleteUserAPI
}
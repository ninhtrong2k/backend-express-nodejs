const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService')
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
        _id: userId
    })
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No file uploadfile")
    }
    let result = await uploadSingleFile(req.files.image);
    console.log(result);
    return res.send("Oki singer");
}

const postUploadMultipleFilesApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No file uploadfile")
    }
    if (Array.isArray(req.files.image)) {   /// kiểm tả xem có phải là 1 mảng ko 
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }else {
        return await postUploadSingleFileApi(req, res);
    }
}
module.exports = {
    getusersAPI, postCreateUserAPI, putUpdateUser, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi
}
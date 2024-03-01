const express = require('express');
const routerAPI = express.Router();
const { getusersAPI, postCreateUserAPI,
    putUpdateUser , deleteUserAPI , postUploadSingleFileApi} = require('../controllers/apiController')

routerAPI.get('/users', getusersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);

module.exports = routerAPI;
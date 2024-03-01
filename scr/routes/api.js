const express = require('express');
const routerAPI = express.Router();
const { getusersAPI, postCreateUserAPI,
    putUpdateUser , deleteUserAPI} = require('../controllers/apiController')

routerAPI.get('/users', getusersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI;
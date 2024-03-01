const express = require('express');
const routerAPI = express.Router();
const { getusersAPI, postCreateUserAPI,
    putUpdateUser , deleteUserAPI , postUploadSingleFileApi , postUploadMultipleFilesApi} = require('../controllers/apiController')
const {postCreateCustomer} = require('../controllers/customerController');
routerAPI.get('/users', getusersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesApi);

routerAPI.post('/customers', postCreateCustomer);


module.exports = routerAPI;
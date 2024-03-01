const express = require('express');
const routerAPI = express.Router();
const { getusersAPI, postCreateUserAPI,
    putUpdateUser , deleteUserAPI , postUploadSingleFileApi , postUploadMultipleFilesApi} = require('../controllers/apiController')
const {postCreateCustomer , postCreateArrCustomer , getAllCustomer , putCustomer , 
    getCustomerById , deleteACustomer} = require('../controllers/customerController');
routerAPI.get('/users', getusersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUser);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesApi);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.get('/customers', getAllCustomer);
routerAPI.get('/customer-byid', getCustomerById);
routerAPI.put('/customers', putCustomer);
routerAPI.delete('/customers', deleteACustomer);

routerAPI.post('/customers-many', postCreateArrCustomer);


module.exports = routerAPI;
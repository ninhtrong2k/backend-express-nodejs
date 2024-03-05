const express = require('express');
const routerAPI = express.Router();
const { getusersAPI, postCreateUserAPI,
    putUpdateUser, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi } = require('../controllers/apiController')
const { postCreateCustomer, postCreateArrCustomer, getAllCustomer, putCustomer,
    getCustomerById, deleteACustomer, deleteArrCustomer } = require('../controllers/customerController');
const {postCreateProjects , getAllProject , updateProject , deleteProject} = require("../controllers/projectController")
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
routerAPI.delete('/customers-many', deleteArrCustomer);

routerAPI.post('/projects', postCreateProjects);
routerAPI.get('/projects', getAllProject);
routerAPI.put('/projects', updateProject);
routerAPI.delete('/projects', deleteProject);


routerAPI.get('/info', (req, res) => {
    return res.status(200).json({
        data: req.query
    })
});
routerAPI.get('/info/:name/:adress', (req, res) => {
    return res.status(200).json({
        data: req.params
    })
});


module.exports = routerAPI;
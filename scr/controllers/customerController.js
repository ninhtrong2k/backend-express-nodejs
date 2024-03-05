const { uploadSingleFile } = require('../services/fileService')
const aqp = require('api-query-params');
const { createCustomerService, createArrayCustomerService,
    getAllCustomerService, putCustomerService, deleteACustomerService, deleteArrCustomerService } = require('../services/customerService')
const Joi = require('joi');
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            address: Joi.string(),
            phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
            email: Joi.string().email(),
            description: Joi.string(),
        })
        let { error } = schema.validate(req.body);// , { abortEarly: false }
        if (error) {
            return res.status(200).json({
                msg: error
            });
        } else {
            let imageUrl = "";
            if (!req.files || Object.keys(req.files).length === 0) {
                // do notthing
            } else {
                let result = await uploadSingleFile(req.files.image);
                imageUrl = result.path;
            }

            let customerData = {
                name,
                address,
                phone,
                email,
                description,
                image: imageUrl
            }
            let customer = await createCustomerService(customerData);
            return res.status(200).json({

                EC: 0,
                data: customer

            })
        }
    },
    postCreateArrCustomer: async (req, res) => {
        let customer = await createArrayCustomerService(req.body.customers);
        if (customer) {
            return res.status(200).json({
                EC: 0,
                data: customer

            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customer

            })
        }
    },
    getAllCustomer: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        // let result = null;
        if (limit && page) {
            let result = await getAllCustomerService(limit, page, req.query);
        } else {
            let result = await getAllCustomerService();
        }
        return res.status(200).json({
            EC: 0,
            data: result
        })

    },
    getCustomerById: async (req, res) => {
        let result = await getCustomerByIdService(req.id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    putCustomer: async (req, res) => {
        const { name, id } = req.body;
        let customerData = {
            id,
            name,
        }
        let result = await putCustomerService(customerData);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteACustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteACustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    , deleteArrCustomer: async (req, res) => {
        // res.send("Created user suceed");
        if (req.body.customers && Array.isArray(req.body.customers)) {
            const idArray = req.body.customers.map(customer => customer.id).filter(id => id !== undefined);
            let customer = await deleteArrCustomerService(idArray);
            if (customer) {
                return res.status(200).json({
                    EC: 0,
                    data: customer

                })
            } else {
                return res.status(200).json({
                    EC: -1,
                    data: customer

                })
            }
        }

    }
}
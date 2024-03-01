const { uploadSingleFile } = require('../services/fileService')
const { createCustomerService, createArrayCustomerService,
    getAllCustomerService, putCustomerService , deleteACustomerService} = require('../services/customerService')
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
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
        let result = await getAllCustomerService();
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
}
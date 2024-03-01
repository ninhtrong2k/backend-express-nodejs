const { uploadSingleFile } = require('../services/fileService')
const { createCustomerService, createArrayCustomerService } = require('../services/customerService')
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
        }else {
            return res.status(200).json({
                EC: -1,
                data: customer

            })
        }
    }
}
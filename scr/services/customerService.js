const Customer = require("../models/customer");
const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    // 2:23
}
const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("err", error);
        return null;

    }
}
const getAllCustomerService = async () => {
    try {
        let result = await Customer.find();
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}

const getCustomerByIdService = async(id) => {
    try {
        let result = await Customer.findById(id);
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}
const putCustomerService = async (customerData) => {
    try {
        let result = await Customer.updateOne({ _id: customerData.id }, { name: customerData.name, })
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}
const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id)
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}
module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService, putCustomerService , getCustomerByIdService, deleteACustomerService
}
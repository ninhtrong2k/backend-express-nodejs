const Customer = require("../models/customer");
const aqp = require('api-query-params');

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
const getAllCustomerService = async (limit,page , queryString) => {
    try {
        // let result = null;
        if(limit && page){
            let offset = (page - 1)* limit;
            // lý do dùng filter  aqp  , đển covert ví dụ toán tử like , in  giống trong SQL
            // Cú pháp phức tạp ta chỉ cần chuyển query thông qua fiter này nó tự convert cú pháp 
            // truyền name = hai,long nó cũng giống như In (hai , long)
            const { filter} = aqp(queryString);
            delete filter.page;
            result =  await Customer.find(filter).skip(offset).limit(limit).exec();
        }else {
            let result = await Customer.find({});
        }
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

const deleteArrCustomerService = async (idArray) => {
    try {
        let result = await Customer.delete({ _id: {$in : idArray}});
        return result;
    } catch (error) {
        console.log("err", error);
        return null;
    }
}
module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService, putCustomerService ,
     getCustomerByIdService, deleteACustomerService , deleteArrCustomerService
}
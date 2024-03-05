const Project = require("../models/project");
const aqp = require('api-query-params');

module.exports = {
    createProjects: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result;
        }
        if (data.type === "ADD-USERS") {
            console.log("check dat", data)
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.usersInfor.push(data.userArr[i]);
            }
            let newResult = await myProject.save();
            //find project by id
            return newResult;
        }
        if (data.type === "REMOVE-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.usersInfor.pull(data.userArr[i]);
            }
            let newResult = await myProject.save();
            return newResult;
        }
    },
    getProjects: async (querySring) => {
        const page = querySring.page
        const { filter, limit, populatetion } = aqp(querySring);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Project.find(filter).populate(filter.populatetion).skip(offset).limit(limit).exec();
        return result;

    },
    uProjects: async (data) => {
        console.log("data", data)
        let result = await Project.updateOne({ _id: data.id }, { ...data })
        return result;
    },
    dProjects: async (id) => {
        let result = await Project.deleteById(id);
        return result;
    }
}
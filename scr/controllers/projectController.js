const { createProjects , getProjects , uProjects , dProjects } = require('../services/projectService')
module.exports = {
    postCreateProjects: async (req, res) => {
        let result = await createProjects(req.body);
        return res.status(200).json({
            EC: 0,
            data: result

        })
    },
    getAllProject: async (req, res) => {
        let result = await getProjects(req.query);
        return res.status(200).json({
            EC: 0,
            data: result

        })
    },
    updateProject: async (req, res) => {
        let result = await uProjects(req.body);
        return res.status(200).json({
            EC: 0,
            data: result

        })
    },
    deleteProject: async (req, res) => {
        let result = await dProjects(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result

        })
    }
}
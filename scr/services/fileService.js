const uploadSingleFile = async (fileObject) => {
    let uploadPath = 'C:/BackEndNodejs/scr/public/images/'+ fileObject.name;
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}
const uploadMultipleFiles = () => {

}
module.exports = {
    uploadSingleFile, uploadMultipleFiles
}
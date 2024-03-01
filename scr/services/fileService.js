const uploadSingleFile = async (fileObject) => {
    const timestamp = new Date().getTime().toString();
    let uploadPath = 'C:/BackEndNodejs/scr/public/images/'+timestamp+'-'+ fileObject.name;
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: timestamp+'-'+ fileObject.name,
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
const uploadMultipleFiles = async(filesArr) => {
    let resultArr = [];
    let consetSuccess = 0;
    for (let i = 0; i < filesArr.length; i++){
        const timestamp = new Date().getTime().toString();
        let finalPath = 'C:/BackEndNodejs/scr/public/images/'+timestamp+'-'+ filesArr[i].name;
        try {
            await filesArr[i].mv(finalPath);
            resultArr.push({
                status : 'success',
                path: timestamp+'-'+ filesArr[i].name,
                fileName: filesArr[i].name,
                error : null
                
            })
            consetSuccess ++;
        } catch (err) {
            resultArr.push({
                status : 'failed',
                path: null,
                fileName: filesArr[i].name,
                error : JSON.stringify(err)
                
            })
        }
    }
    return {
        consetSuccess : consetSuccess,
        deatil : resultArr
    }
}
module.exports = {
    uploadSingleFile, uploadMultipleFiles
}
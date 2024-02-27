const getHomepage = (req , res) => {
    res.send("xin chào thế giới")
}

const getABC = (req, res) => {
    res.send("xin chào thế giới 2")
}
const getHoiDanIT = (req , res) => {
    res.render('sample');

}
module.exports = {
    getHomepage , getABC , getHoiDanIT
}
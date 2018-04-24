const multer = require('koa-multer');

//配置  
var storage = multer.diskStorage({
    //文件保存路径  
    destination: function (req, file, cb) {
        cb(null, `public/uploads`)
    },
    limits: {
        fileSize: 1024 * 1024 * 5 //10m 
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
module.exports = multer({
    storage: storage
});
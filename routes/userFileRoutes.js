const express=require('express');
const multer=require('multer');
const { route, patch } = require('./userTableRoutes');
const { uploadFile, writeFile, readFile, appendFile, renameFile, copyFile } = require('../Controller/userFileController');
const router=express.Router();
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'utils/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname+'-'+Date.now())
    }
})
const upload=multer({storage:storage});
router.route("/uploadFiles").post(upload.single('file'),uploadFile);
router.route("/writeFile/:fileName").post(writeFile);
router.route("/readFile/:fileName").get(readFile);
router.route("/appendFile/:fileName").post(appendFile);
router.route("/renameFile/:fileName").post(renameFile);
router.route("/copyFile/:fileName").post(copyFile);
module.exports=router;
// router.route("/writeFile").
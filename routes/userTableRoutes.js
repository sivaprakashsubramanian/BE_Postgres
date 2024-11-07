const express=require('express');
const { newUser,getUsers, deleteUser, changeUser, updateUsers, uploadUserFiles, deleteUserTable } = require('../Controller/userTable');
const router=express.Router();
const fileUpload=require("../middleware/fileUploads")
const multer=require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'utils/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original file name
    },
  });
const upload = multer({ storage: storage });
;
// we are creating router it act like an mini app
// we are using router.route for optional  middleware and to avoid duplicate route name
router.route("/getUsers/:age").get(getUsers)
router.route("/newUser").post(newUser);
router.route("/updateUser/:id").patch(updateUsers);
router.route("/changeUser/:id").put(changeUser);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/uploadFile").post(upload.single('file'),uploadUserFiles);
router.route("/deleteTable").delete(deleteUserTable);
module.exports=router;
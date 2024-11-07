const multer=require('multer');
const insertFile=()=>{
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'utils/'); // Specify the upload directory
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname); // Use the original file name
        },
      });
      return storage;
      
      

}
module.exports=insertFile;
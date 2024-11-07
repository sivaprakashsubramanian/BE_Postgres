const statusCode=require('http-status-codes');
const file=require('../Model/userFile');
const path=require('path');
const fs = require('node:fs');
const uploadFiles=async (req)=>{
    try{
        if(!req.file)
            {
                return userData={
                    status:statusCode.NO_CONTENT,
                    message:"File Not Found",
                    data:{}
                }
        
            }
            const{filename:FileName,path:FilePath,mimetype:FileType}=req.file;
            const data=await file.create({FileName,FilePath,FileType});
            return fileData={
                status:statusCode.OK,
                message:"File Upload success",
                data
            }


    }
    catch(err)
    {
        return errData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"Unable to Upload",
            data:err
        }
    }
   
    // const userData=await file.create()


}
const writeFiles=(req)=>{
    try{
        const{fileName:FileName}=req.params;
        const directPath=path.join(__dirname,"..","utils",FileName);
        const {content}=req.body;
        fs.writeFileSync(directPath,content);
        return fileData={
            status:statusCode.OK,
            message:"File write successfully"
        }


    }
    catch(err)
    {
        return fileData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"File write Failed",
            data:err
        }

    }
}
const readFiles=(req)=>{
    try{
        const{fileName:FileName}=req.params;
        const directPath=path.join(__dirname,"..","utils",FileName);
        const readedData=fs.readFileSync(directPath,"utf8");
        return fileData={
            status:statusCode.OK,
            message:"File Read successfully",
            data:readedData
        }


    }
    catch(err)
    {
        return fileData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"File Read Failed",
            data:err
        }

    }
}
const appendFiles=async(req)=>{
    try{
        const{fileName:FileName}=req.params;
        const directPath=path.join(__dirname,"..","utils",FileName);
        const {content}=req.body;
        fs.appendFileSync(directPath,content);
        return fileData={
            status:statusCode.OK,
            message:"File append  successfully"
        }



    }
    catch(err)
    {
        return fileData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"File Append Failed",
            data:err
        }

    }

}
const renameFiles=(req)=>{
    try{
        const{fileName:FileName}=req.params;
        const oldFile=path.join(__dirname,"..","utils",FileName);
        
        const {newFileName}=req.body;
        const newFile=path.join(__dirname,"..","utils",newFileName);
        fs.renameSync(oldFile,newFile);
        return fileData={
            status:statusCode.OK,
            message:"File Renamed successfully"
        }

    }
    catch(err){
        return fileData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"File Renamed Failed",
            data:err
        }

    }
}
const copyFiles=(req)=>{
    try{
        const{fileName:FileName}=req.params;
        const sourceFile=path.join(__dirname,"..","utils",FileName);
        const {destinationFileName}=req.body;
        const destinaionFile=path.join(__dirname,"..","utils",destinationFileName);
        fs.copyFileSync(sourceFile,destinaionFile);
        return fileData={
            status:statusCode.OK,
            message:"File Copied successfully"
        }



    }
    catch(err)
    {
        return fileData={
            status:statusCode.INTERNAL_SERVER_ERROR,
            message:"File Copied Failed",
            data:err
        }

    }
}
module.exports={
    uploadFiles,
    writeFiles,
    readFiles,
    appendFiles,
    renameFiles,
    copyFiles
}
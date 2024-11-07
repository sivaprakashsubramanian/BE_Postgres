const path=require('path');
const fs=require('node:fs');
const fileService=require('../service/userFileService')
const uploadFile=async(req,res)=>{
    try{
        const uploadedData= await fileService.uploadFiles(req);
        res.status(uploadedData.status).send({message:uploadedData.message,data:uploadedData.data})

    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data})
    }
   

}
const readFile=(req,res)=>{
    try{
        const readedData= fileService.readFiles(req);
        res.status(readedData.status).send({message:readedData.message,data:readedData.data})
    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data});

    }

}
const writeFile=async(req,res)=>{
    try{
        const writtedData= await fileService.writeFiles(req);
        res.status(writtedData.status).send({message:writtedData.message});
        
    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data});

    }
}
const appendFile=async(req,res)=>{
    try{
        const appendedData=await fileService.appendFiles(req);
        res.status(appendedData.status).send({message:appendedData.message,data:appendedData.data});

    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data})

    }
    


}
const renameFile=(req,res)=>{
    try{
        const renamedData=fileService.renameFiles(req);
        res.status(renamedData.status).send({message:renamedData.message,data:renamedData.data});

    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data})

    }

}
const copyFile=(req,res)=>{
    try{
        const copiedData=fileService.copyFiles(req);
        res.status(copiedData.status).send({message:copiedData.message})

    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data});

    }
}

module.exports={
    uploadFile,
    readFile,
    writeFile,
    appendFile,
    renameFile,
    copyFile
}
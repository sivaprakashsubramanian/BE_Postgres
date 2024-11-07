const userService=require("../service/userService");
const statusCode=require('http-status-codes');

const User = require("../Model/userTable");
const getUsers=async (req,res,next)=>{
    try{
        const age=req.params.age;
        const users = await userService.getUser(age);
        res.status(users.status).send({message:users.message,data:users.data})

    }
    catch(err){
        res.status(err.status).send({message:"Cannot get Data",data:err})

    }
    
   
}
const newUser=async(req,res,next)=>{
    try{
        const createdUser=await userService.createUser(req.body);
        res.status(200).send({message:createdUser.message,data:createdUser.data});

    }
    catch(err)
    {
        res.status(err.status).send({message:"Cannot get Data",data:err})

    }
    

}
const updateUsers= async(req,res,next)=>{
    try{
        const updatedData=await userService.updateUser(req.body,req.params?.id);
        res.status(updatedData.status).send({message:updatedData.message,data:updatedData.data})

    }
    catch(err){
        res.status(err.status).send({message:err.message,data:err.data})
    }
    
}
const changeUser=async(req,res,next)=>{
    try{
        const id=req.params.id;
    const changedData=await userService.changeUser(req.body,id)
      res.status(changedData.status).send({message:changedData.message,data:changedData.data})

    }
    catch(err){
        res.status(err.status).send({message:err.message,data:err.data});
    }
    

}
const deleteUser=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedUserData=await userService.deletedUsers(id);
        res.status(deletedUserData.status).send({message:deletedUserData.message,data:deletedUserData.data});

    }
    catch(err)
    {
        res.status(err.status).send({message:err.message,data:err.data});
    }
    
}
const deleteUserTable=async(req,res)=>{
    try{
        const deletedTable=await userService.deleteTable(req);
        res.status(deletedTable.status).send({message:deletedTable.message,data:deletedTable.data})

    }
    catch(err){
        res.status(err.status).send({message:err.message,data:err.data})


    }

}
const uploadUserFiles=async (req,res)=>{
    try{
        const uploadedFile= await userService.uploadUsersFile(req.file,req.body);
        res.status(uploadedFile.status).send({message:uploadedFile.message,data:uploadedFile.data});

    }
    catch(err){
        res.status(err.status).send({message:err.message,data:err.data});
    }
    

}
module.exports={
    getUsers,
    newUser,
    updateUsers,
    changeUser,
    deleteUser,
    uploadUserFiles,
    deleteUserTable
}
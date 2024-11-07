const { application } = require("express");
const { updateUsers } = require("../Controller/userTable");
const User=require("../Model/userTable");
const statusCode=require('http-status-codes');
const { Json } = require("sequelize/lib/utils");
const getUser=async(age)=>{
  try{
    const data=await User.findAll({
      where:{
          extraInfo:{
              age:age
          }

      }
    })
    if(data.length==0)
    {
      const allUserData={
        status:statusCode.NOT_FOUND,
        message:"Data Not Found",
        data:data
      }
      return allUserData;

    }

    const allUserData={
      status:statusCode.OK,
      message:"Data get Succesfully",
      data:data
    }
    return allUserData;
 

  }
  catch(errors)
  {
    const error={
      
        status:statusCode.INTERNAL_SERVER_ERROR,
        message:"Does not able to Get Data",
        error:errors
      
      
    }
    return error;
    
  }
   


}
const createUser=async(body)=>{
  try{
    const data=await User.create(body);
    if(data.length==0){
      const createdData={
        status:statusCode.NO_CONTENT,
        message:"User Not Created ",
        data:data
      }
     
      return createdData;

    }
    const createdData={
      status:statusCode.OK,
      message:"User Created Successfully",
      data:data
    }
   
    return createdData;

  }
  catch(err)
  {
    const error={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"Unable to create User",
      data:err
    }
    return error;
  }
  
}
const updateUser=async(body,id)=>{
  try{
    const {firstName,rollNo,extraInfo}=body;
    
   const updatedUser=await User.update(
        { firstName:firstName,
        rollNo:rollNo,
        extraInfo:{
            age:extraInfo.age,
            address:extraInfo.address
        }},
        {
          where: {
            id:id,
          },
        },
      );
      if(updatedUser.length==0){
        const updatedDatas={
          status:statusCode.NO_CONTENT,
          message:"No user Found",
          data:updatedUser
        }
       
        return updatedDatas;
  
      }
      const updatedDatas={
        status:statusCode.OK,
        message:"Data Updated Successfully",
        data:updatedUser
      }
      // await updatedUser.save();
      return updatedDatas;

  }
  catch(err)
  {
    const error={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"Unable to Update  User",
      data:err
    }
    return error;
  }

  
    
}
const changeUser=async(body,id)=>{
  try{
    const changedUser=await User.update(
      body,
       {
         where: {
           id:id,
         },
       },
     );
     if(changedUser.length==0){
      const changedDatas={
        status:statusCode.NO_CONTENT,
        message:"User Not Found",
        data:data
      }
     
      return changedDatas;

    }
     const changedDatas={
      status:statusCode.OK,
      message:"Changed User Successfully",
      data:changedUser
     }
    //  await changedUser.save();
     return changedDatas;

  }
  catch(err){
    const error={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"Unable to Update  User",
      data:err
    }
    return error;

  }
   
}
const deletedUsers=async(id)=>{
  try{

    const deleteUser=await User.destroy({
      where: {
        id:id,
      },
    });
    // console.log(deleteUser,"len");
    if(deleteUser==0)
    {

      const deletedData={
        status:statusCode.NOT_FOUND,
        message:"No Data",
        data:deleteUser
      }
      return deletedData;
    }
    const deletedData={
      status:statusCode.OK,
      message:"User Deleted Successfully",
      data:deleteUser
    }
    return deletedData;

  }
  catch(err)
  {
    const error={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"Unable to Delete  User",
      data:err
    }
    return error;

  }
    
}
const uploadUsersFile=async(file,body)=>{
  try{
    
    if(file)
      {
        const json=JSON.parse(body.body);
        const{firstName,rollNo,extraInfo}=json;
        const data=await User.create({
          firstName:firstName,
          rollNo:rollNo,
          extraInfo:{
              age:extraInfo.age,
              address:extraInfo.address
          },
          application:file.path

        })

        return uploadedUser={
          status:statusCode.OK,
          message:"File Uploaded Successfully",
          data
    
        }
      }
      else{
        return failedToUpload={
          status:statusCode.NOT_FOUND,
          message:"Failed to upload",
          data:{}
        }
      }

  }
  catch(err){
    return error={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"File Unable to Upload",
      data:err
    }
  }
 

}
const deleteTable=async()=>{
  try{
    const deletedTableData=await User.drop();
    return data={
      status:statusCode.OK,
      message:"Deleted Table",
      data:deletedTableData
    }
  }
  catch(err){
    return data={
      status:statusCode.INTERNAL_SERVER_ERROR,
      message:"Unable to Delete Table",
      data:err
    }
  }
}
module.exports={
    getUser,
    createUser,
    updateUser,
    changeUser,
    deletedUsers,
    uploadUsersFile,
    deleteTable
}
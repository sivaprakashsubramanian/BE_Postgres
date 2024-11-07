const app = require("./app");
const dotenv=require('dotenv');
const userDB = require("./Config");
// userDB.Sequelize.afterSync(()=>console.log("db synced"));
const connection=async ()=>{
  try{
    await userDB.authenticate();
  console.log("connection Establish Successfully");

  }
  catch(error){
    console.error('Unable to connect to the database:', error);
  }
  await userDB.sync()
  
}
connection(); 
app.listen(5000,()=>{
  console.log("Server running at Port 5000");
})

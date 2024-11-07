const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
// const user=require() 
const user = require('./routes/userTableRoutes');
const files=require('./routes/userFileRoutes')
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',user);
app.use('/api',files);
module.exports=app;

const express = require('express');
const  router  = require('./router/contactRouter');
const connectDb = require('./config/dbConn');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
connectDb();
app.use('/api',router);



app.listen(8000,()=>console.log(`Server running at ${port}`))
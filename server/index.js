import  express  from "express";
import dotenv from 'dotenv';
import router from "./Router/router.js";
import cors from 'cors'
import bodyparser from 'body-parser';
import Connection from "./database/db.js";
const app=express()
 const PORT=8000;
 const HOST='localhost';
 dotenv.config();
 app.use(bodyparser.json({extended:true}));
 app.use(bodyparser.urlencoded({ extended:true }));
 app.use(cors());

app.get('/', function(req, res){res.send("server is up!");});
 
 app.use('/',router);
 
 const username= process.env.DB_USERNAME;
 const password= process.env.DB_PASSWORD;
 Connection(username,password);
app.listen( PORT,HOST,()=>console.log(`server started on http://${HOST}:${PORT}`));

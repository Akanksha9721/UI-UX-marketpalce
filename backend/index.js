//importing express
const  express=require('express');
const UserRouter=require('./routers/userRouter');
const DesignRouter=require('./routers/designRouter');
const cors= require('cors');
//initializating express
const app=express();
const port =5000;

//middleware
app.use(cors({
origin:'http://localhost:3000'
}));
app.use(express.json());
app.use('/user',UserRouter);
app.use('/design',DesignRouter);

//accept and process request
app.get('/',(req,res)=>{
    res.send('response from express');
 });
 app.get('/add',(req,res)=>{
    res.send('add response from index');
 })
 app.get('/getall',(req,res)=>{
    res.send('response from getall');
 })
 //getall
 //delete
 //update

//start the server
app.listen(port,()=>{
    console.log('server started');
});


//importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const DesignRouter = require('./routers/designRouter');
const UtilRouter = require('./routers/utils');
const cors = require('cors');
//initializating express
const app = express();
const port = 5000;

//middleware
app.use(cors({
   origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/user', UserRouter);
app.use('/design', DesignRouter);
app.use('/util', UtilRouter);

//accept and process request
app.get('/', (req, res) => {
   res.send('response from express');
});

app.use(express.static('./uploads'));

//start the server
app.listen(port, () => {
   console.log('server started');
});


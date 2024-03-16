const express = require('express')
const webRouters = require('./src/routers/api')
require('./src/config/dataBaseMG')
const body = require('body-parser')



const app = express();
const port = 8082;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(body.json())
//khai báo router
app.use(webRouters)


//run server
app.listen(port, () => 
{
    console.log('server run in port: '+ port);
})



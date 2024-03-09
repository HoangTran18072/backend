const express = require('express')
const webRouters = require('./src/routers/api')
require('./src/config/dataBaseMG')
const body = require('body-parser')



const app = express();
const port = 8082;


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



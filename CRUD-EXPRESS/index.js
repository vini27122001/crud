const express = require('express');
const router = require('./routes/routes')
const cors = require('cors');
const userController = require('./controllers/userController')
const  bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(router)



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/html/inicial.html')
})




app.listen(5000,()=>{
    console.log('servidor criado!')
});
const express = require('express');
const db = require("./config/db");
const user = require("./model/usermodel");
const U_router = require("./Routes/userRouter");
const B_router = require('./Routes/BookRoutes');
const M_router=require('./Routes/MovieRouter')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/user', U_router);
app.use('/Book', B_router);
app.use('./Movie',M_router)



app.listen(4000, () => {
    console.log("server listen");
});

const exprees = require("express")
const app = express()
const cors = require('cors');
const bodyparser =require("body-parser")
require("./.env").config()
require("./Databse")
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});
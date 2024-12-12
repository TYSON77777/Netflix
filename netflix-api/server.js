const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const UserRoutes = require("./routes/UserRoutes")

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected");
})
app.use("/api/user", UserRoutes);
app.listen(5000, console.log("server started"));
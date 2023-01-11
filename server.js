const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require('./routes/TodoRoutes')

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Conected to database"))
    .catch((err)=> console.log(err))

app.use(routes);

app.listen(PORT , ()=> console.log(`Lisening on port ${PORT}`))
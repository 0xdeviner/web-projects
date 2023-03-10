const { json } = require("express");
const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler")
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})

connectDB();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)
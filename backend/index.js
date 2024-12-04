const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const accoutRouter = require("./routes/api/account.js");

const port = 3000;
const uri =
    "mongodb+srv://chettouahsohaib:sohaib2004@project.tdw64.mongodb.net/?retryWrites=true&w=majority&appName=Project";
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(uri, {
        dbName: "Project",
    })
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));

app.use("/api/account", accoutRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
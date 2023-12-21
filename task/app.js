// import express
const express = require("express");
const router = require("./router/api.js");
// membuat object express
const app = express();


// Membuat middleware
app.use(express.json());
app.use(router);
/**
 * Membuat routing 
 * Method get menerima 2 params
 * param 1 adalah endpoints
 * param 2 adalah callbacks
 * callback menerima object req dan res
 */
app.get("/", (req, res) => {
    res.send("hello Express");
});

//mendefinisikan port
app.listen(3000);
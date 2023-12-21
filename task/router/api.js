// import  express
const StudentController = require("../task/controller/StudentCotroller.js");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello express");
});

router.get("/student", StudentController.index);
router.post("/student", StudentController.store);
router.put("/student/:id", StudentController.update);
router.delete("/student/:id", StudentController.destroy);

module.exports = router;
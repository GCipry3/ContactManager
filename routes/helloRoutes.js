const express = require("express")
const {hello} = require("../controllers/helloController")
const router = express.Router()

router.get("/", hello)

router.get("/hello", hello)

router.get("/home", hello)

module.exports = router
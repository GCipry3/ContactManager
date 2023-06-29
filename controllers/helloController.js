const asyncHandler = require("express-async-handler")

const hello = asyncHandler(async (req,res) => {
    res.send("Hello there")
})

module.exports = {hello}
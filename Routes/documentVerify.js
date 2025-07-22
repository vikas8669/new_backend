const express = require("express")
const router = express.Router()

const {verify} = require("../Controller/RequireDocument")

router.post("/verify-documents", verify)

module.exports = router
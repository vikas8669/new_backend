const express = require("express")
const router = express.Router()

const {submitEligibilityForm} = require("../Controller/UserConotroller")

router.post("/eligible", submitEligibilityForm)

module.exports = router
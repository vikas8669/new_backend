const express = require("express")
const app = express()
const DbConnect = require("./Config/Db")
const eligible = require("./Routes/EligibleRoute")
const verifyDocument = require("./Routes/documentVerify")
require("dotenv").config()
DbConnect()


app.use(express.json())
const PORT = process.env.PORT || 3000


app.get("/",(req, res) => {
    res.send("Hello Node")

})

app.use("/api/v1", eligible)
app.use("/api/v1", verifyDocument)




app.listen(PORT, () => {
    console.log("Server Start At", PORT)
})
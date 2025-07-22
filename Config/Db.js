const mongoose = require("mongoose")
require("dotenv").config()


const DbConnect = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db Connected SuccessFully")
    } catch(ere) {
        console.log(err)
        process.exit(1)

    }
}

module.exports = DbConnect
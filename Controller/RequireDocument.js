const DocumentSchema = require("../Models/Document")

exports.verify = async (req, res) => {

    try {

        const {
            identityProof,
            addressProof,
            incomeProofType,
            employmentProof,
            photograph,
            bankDetails,
            panCard,

        } = req.body

        if (!identityProof ||
            !addressProof ||
            !incomeProofType ||
            !employmentProof ||
            !photograph ||
            !bankDetails ||
            !panCard) {

            return res.status(402).json({
                message: 'All filed required!'
            })
        }

        const newEntry = new DocumentSchema({
            identityProof,
            addressProof,
            incomeProofType,
            employmentProof,
            photograph,
            bankDetails,
            panCard
        });

        await newEntry.save();
        res.status(200).json({
            success:true,
            data:newEntry,
            message:"data submitted and verify"
        })
    } catch (err) {
        console.log(err)
    }
}
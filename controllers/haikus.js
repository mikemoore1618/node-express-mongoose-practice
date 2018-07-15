const Haiku = require('../models/dog')

exports.showAll = (req, res) => {
    Haiku.find({}, (err, haikus) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload:{ haikus } })
        }
    })
}
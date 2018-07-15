const Haiku = require('../models/haiku')

exports.showAll = (req, res) => {
    Haiku.find({}, (err, haikus) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload:{ haikus } })
        }
    })
}

exports.create = (req, res) => {
    Haiku.create(req.body, (err, newHaiku) => {
        if (err) {
            res.json({ status: "FAIL", err });
        } else {
            res.json({ status: "SUCCESS", payload: { newHaiku
            } })
        }
    })
};
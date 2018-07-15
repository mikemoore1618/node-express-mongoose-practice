const Haiku = require('../models/haiku')

module.exports = {

// Show all Books
index: (req, res) => {
    Haiku.find({}, (err, haikus) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload:{ haikus } })
        }
    })
},

// Create a new User
create: (req, res) => {
    Haiku.create(req.body, (err, newHaiku) => {
        if (err) {
            res.json({ status: "FAIL", err });
        } else {
            res.json({ status: "SUCCESS", payload: { newHaiku
            } })
        }
    })
}

}
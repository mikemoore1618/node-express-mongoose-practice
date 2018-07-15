const Haiku = require('../models/Haiku.js')

module.exports = {

//SHOW ALL
index: (req, res) => {
    Haiku.find({}, (err, haikus) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload:{ haikus } })
        }
    })
},

// CREATE
create: (req, res) => {
    Haiku.create(req.body, (err, newHaiku) => {
        if (err) {
            res.json({ status: "FAIL", err });
        } else {
            res.json({ success: true, message: 'HAIKU CREATED', Haiku: newHaiku
            })
        }
    })
},

// DELETE
destroy: (req, res) => {
    let id = req.params.id
    User.findByIdAndRemove(id, (err, deletedHaiku) => {
      if (err) return console.log(err)
      res.json({ success: true, message: 'HAIKU DELETED' })
    })
  }
}



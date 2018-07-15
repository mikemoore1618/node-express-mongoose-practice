const Haiku = require('../models/Haiku')

// SHOW ALL
exports.index = (req, res) => {
  Haiku.find({}, (err, haikus) => {
    if(err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikus } })
    }
  })
},

// SHOW ID
exports.showHaiku = (req, res) => {
  Haiku.findById(req.params.id, (err, haikuFromDB) => {
    if(err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({  status: "SUCCESS", payload: { haikuFromDB } })
    }
  })
},

// CREATE
exports.create = (req, res) => {
  Haiku.create(req.body, (err, newHaiku) => {
    if(err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { newHaiku } })
    }
  })
},

// PATCH
exports.update = (req, res) => {
  Haiku.update({_id: req.params.id}, {$set: req.body}, (err, haikus) => {
    if(err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { haikus } })
    }
  })
},

//DELETE
exports.destroy = (req, res) => {
  Haiku.findByIdAndRemove({_id: req.params.id}, (err, deletedHaiku) => {
    if(err) {
      res.json({ status: "FAIL", err })
    } else {
      res.json({ status: "SUCCESS", payload: { deletedHaiku }})
    }
  })
};
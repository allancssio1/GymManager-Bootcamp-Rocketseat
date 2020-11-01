const { date, age, typeBlood } = require ('../lib/utils')
const db = require ('../config/db')
const Member = require ('../models/member')

module.exports = {
  index (req, res) {
    Member.all (function (members) {
      return res.render ('members/index', { members })
    })
  },
  create (req, res) {
    Member.instructorSeleteOption(function (options) {

      return res.render('members/create', { isntructorOptions: options })
    })
  },
  post (req, res) {
    const keys = Object.keys(req.body)
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('please, fill all fields')
      }  
    }  
    Member.create(req.body, function (member) {
      return res.redirect(`/members/${member}`)
    })
  },
  show (req, res) {
    Member.find(req.params.id, function (member) {
      if (!member) res.send ('Member not found!')
      member.age = age(member.birth)
      member.birth = date(member.birth).birthDay
      member.blood = typeBlood(member.blood)
      return res.render('members/show', {member})
    })
  },
  edit (req, res) {
    Member.find(req.params.id, function (member) {
      if (!member) return res.send ('Member not found!')
      member.birth = date(member.birth).iso
      Member.instructorSeleteOption(function (options) {

        return res.render('members/edit', {member, isntructorOptions: options})
      })
    })
  },
  put (req, res) {
    const keys = Object.keys(req.body)
      for (key of keys) {
        if (req.body[key] == "") {
          return res.send('please, fill all fields')
        }  
      }
    Member.update(req.body, function () {
      return res.redirect(`/members/${req.body.id}`)
    })
  },
  delete (req, res) {
    Member.delete(req.body.id, function () {
      res.redirect('/members')
    })
  }
}
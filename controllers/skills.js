// import { skills } from "../data/skills-data.js";
import { skills } from "../data/skills-data.js"
import { Skill } from "../models/skill.js"



function index (req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })

  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
  // res.render('skills/index', {
  //   skills: skills
  // })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  console.log('here it is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  Skill.create(req.body)
  .then(skill => {
    console.log(skill)
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  console.log(req.params.skillId)
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })

  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function edit(req, res) {
  console.log(req.params.skillId)
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
}

function update(req, res) {
  console.log('the UPDATE PARAMS!!!!!!', req.params);
  Skill.findByIdAndUpdate(req.params.skillId, req.body, {new: true})
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  edit,
  update,
  deleteSkill as delete
}
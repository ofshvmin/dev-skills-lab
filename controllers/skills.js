import { skills } from "../data/skills-data.js";
import { Skill } from "../models/skill.js"


// Skill.create({
//   text: 'Sailing',
//   level: 'Novice'
// })

function index (req, res) {
  // Skill.find({})
  // .then(skill => {
  //   res.render('skills/index', {
  //     skills: skills
  //   })
  // })

  // .catch(error => {
  //   console.log(error)
  //   res.redirect('/')
  // })
  res.render('skills/index', {
    skills: skills
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  console.log('here it is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}


export {
  index,
  newSkill as new,
  create
}
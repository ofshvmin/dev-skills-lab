import { Skill } from "../models/skill.js"
import { skills } from "../data/skills-data.js"

// Skill.create({
//   text: 'Sailing',
//   level: 'Novice'
// })

function index (req, res) {
  Skill.find({})
  .then(skill => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  skills
}
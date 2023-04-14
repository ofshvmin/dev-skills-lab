import { Skill } from "../models/skill.js"
import { skills } from "../data/skills-data.js"

// Skill.create({
//   text: 'Sailing',
//   level: 'Novice'
// })

function index (req, res) {
  console.log('can we find the index?')
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index,
  skills
}
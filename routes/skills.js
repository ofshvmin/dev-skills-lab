import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

// // GET localhost:3000/users
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

console.log(skillsCtrl);

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)

// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// GET localhost:3000-/skills/:skillId
router.get('/:skillId', skillsCtrl.show)

// GET localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCtrl.edit)

//POST localhost:3000/skills
router.post('/', skillsCtrl.create)

//PATCH localhost:3000/skills
router.put('/:skillId', skillsCtrl.update)

//DELETE localhost:3000/skills
router.delete('/:skillId', skillsCtrl.delete)

export { router }

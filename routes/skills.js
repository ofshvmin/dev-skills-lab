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




export { router }
import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Skills' })
})

// GET localhost:3000/students
router.get('/', function(req, res) {
  res.render('skills/index', {
    students: skills
  })
})

export { router }

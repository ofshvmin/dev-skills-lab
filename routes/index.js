import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Skills' })
})

// GET localhost:3000/skills
router.get('/', function(req, res) {
  res.render('index')
})

router.get('/new', function(req, res) {
  res.render('skills/new')
})

export { router }

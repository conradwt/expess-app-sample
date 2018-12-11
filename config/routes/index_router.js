import {Router} from 'express'
var router = Router()

router.get('/', function (request, response) {
  response.redirect('/<add your root route here>')
})

export default router

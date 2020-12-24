const express = require('express')

const router = express.Router()

const materiasRouter = require('./materias.js')
const profesoresRouter = require('./profesores.js')

router.get('/', (req, res) => {
    res.send("Pagina de inicio")
})

router.use('/materias', materiasRouter)
router.use('/profesores', profesoresRouter)

module.exports = router
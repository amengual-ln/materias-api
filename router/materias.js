const express = require('express')

const router = express.Router()

const Materia = require('../models/materia.js')

router.get('/', async (req, res) => {
    try {
        const materias = await Materia.find()
    } catch(error) {
        res.status(500).json({ msg: error.message })
    }
})

router.get('/:id', getMateria, (req, res) => {
    res.json(res.materias)
})

router.post('/', async (req, res) => {
    const materia = new Materia({
        nombre: req.body.nombre,
        email: req.body.email
    })
    try {
        const newMateria = await materia.save()
        res.status(201).json(newMateria)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

router.delete('/:id', getMateria, async (req, res) => {
    try {
        await res.materia.remove()
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

// middleware
async function getMateria(req, res, next) {
    let materia
    try {
        materia = await Materia.findById(req.params.id)
        if (materia == null) {
            return res.status(404).json({ msg: 'No se encotró un materia con id ' + req.params.id })
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
    res.materia = materia
    next()
}

module.exports = router
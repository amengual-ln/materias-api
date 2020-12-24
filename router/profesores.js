const express = require('express')

const router = express.Router()

const Profesor = require('../models/profesor.js')

router.get('/', async (req, res) => {
    try {
        const profesores = await Profesor.find()
        res.json(profesores)
    } catch(error) {
        res.status(500).json({ msg: error.message })
    }
})

router.get('/:id', getProfesor, (req, res) => {
    res.json(res.profesor)
})

router.post('/', async (req, res) => {
    const profesor = new Profesor({
        nombre: req.body.nombre,
        email: req.body.email
    })
    try {
        const newProfesor = await profesor.save()
        res.status(201).json(newProfesor)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

router.delete('/:id', getProfesor, async (req, res) => {
    try {
        await res.profesor.remove()
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

// middleware
async function getProfesor(req, res, next) {
    let profesor
    try {
        profesor = await Profesor.findById(req.params.id)
        if (profesor == null) {
            return res.status(404).json({ msg: 'No se encotró un profesor con id ' + req.params.id })
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
    res.profesor = profesor
    next()
}

module.exports = router
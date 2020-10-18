const express = (require('express'))
const db = require('../data/config')

const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        res.json(await db("cars"))
    } catch(er) {
        next(er)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const newCar = {
            vin: req.body.vin, 
            make: req.body.make, 
            model: req.body.model, 
            mileage: req.body.mileage, 
            transmissionStatus: req.body.transmissionStatus
        }

        const [id] = await db("cars").insert(newCar)
        res.status(201).json(await db('cars').where({ id }).first())
    } catch(er) {
        next(er)
    }
})




module.exports = router;
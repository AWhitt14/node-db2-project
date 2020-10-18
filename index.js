const express = require('express')
const carRouter = require('./carRouter.js/carRouter')
 
const server = express()
const port = 3000

server.use(express.json())
server.use(carRouter)




server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({message: 'server side error'})
})

server.listen(port, () => {
    console.log(`Your looking at Usain Bolt cause i'm running`, `http://localhost:${port}`)
})
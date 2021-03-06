const cors = require("cors");
const corsOptions = require("./configs/cors.js");

const express = require('express')
const app = express()
// const PORT = process.env.PORT || 4000


// Add the middleware code needed to accept incoming data and add it to req.body
// NODE_ENV === "production" ? app.use(cors(corsOptions)) : 
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
app.use('/api/authors/', authorRouter)




app.listen(4000, () => console.log('Server running on port 4000!'))

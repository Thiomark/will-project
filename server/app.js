require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require("helmet");
const cors = require('cors')
const { errorMiddleware } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json());
app.use(helmet());
app.use(cors())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/vehicles', require('./routes/vehicleRoute'))
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})
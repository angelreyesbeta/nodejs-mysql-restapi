import express from "express";
import cors from 'cors';
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'
const app = express()

app.use(express.json())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(indexRoutes)
app.use('/api',employeesRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app
import express from 'express'
import userRouter from './routes/user'

const app = express()
app.use(express.json())

const PORT = 3000;

app.get('/ping', (_req , res) => {
    console.log('ping recivido correctamente')
    res.send('pinged')
})

app.use('/api/user',userRouter)

app.listen(PORT, () => {
    console.log('el servidor esta escuchando en el puerto '+ PORT)
})
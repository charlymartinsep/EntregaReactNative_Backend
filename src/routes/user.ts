import express from 'express'
import * as userServices from '../services/userServices'
import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(userServices.getEntriesPublicInfo())
})

router.get('/:id', (req, res) => {
    const user = userServices.getUserById(+req.params.id)
    
    return (user != null)
    ? res.send(user)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newUser=toNewUser (req.body)

        const addUser = userServices.addUsers(newUser)
        res.json(addUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

export default router
import { UsersInterface,UsersInterfacePublicInfo,newUserInfo } from '../types'
import userData from './users.json'

const users: UsersInterface[] = userData as UsersInterface[]

export const getEntries = (): UsersInterface[] => users

export const getUserById = (id : number): UsersInterface | undefined => {
    const entry = users.find(d=>d.id==id)
    return entry
}

export const getEntriesPublicInfo = (): UsersInterfacePublicInfo[] => {
    return users.map(({id,name,comment}) => {
        return {
            id,
            name,
            comment
        }
    })
}

export const addUsers = (newUserInfo:newUserInfo): UsersInterface => {
    const newUser = {
        id: Math.max(...users.map(d=>d.id)) + 1,
        ...newUserInfo
    }
    users.push(newUser)
    return newUser
}
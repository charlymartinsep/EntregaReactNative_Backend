

export interface UsersInterface{
    id: number,
    name: string,
    mail: string,
    password: string,
    comment: string
}
export type UsersInterfacePublicInfo = Pick<UsersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<UsersInterface,'id'>
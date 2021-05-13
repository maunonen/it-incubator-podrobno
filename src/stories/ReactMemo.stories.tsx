import React, { useState } from 'react'
export default {
    title : 'Recat.memo demo',
}

const NewMessagesCounter = (props : { count : number }) => {
    return (
        <div>
            { props.count }
        </div>
    )
}

export type UserType = {
 users : Array<string>
}
const UserSecret  = ( props : UserType) => {
    console.log("Users")
    return (
        <div>
            {
                props.users.map( (u, i) => (<div key={i}>{ u}</div>))
            }
        </div>
    )
}

const Users = React.memo(UserSecret)

export const Example = () => {
    console.log("example")
    const [counter, setCounter ] = useState(0)
    const [users, setUsers ] = useState(["ALex","Jenny","Jari"])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime() ]
        /*users.push('Sveta' + new Date().getTime())*/
        setUsers(newUser)
    }
    return (
        <>
            <button onClick = { () => setCounter(counter + 1 )}>+</button>
            <button onClick = { addUser }>Add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
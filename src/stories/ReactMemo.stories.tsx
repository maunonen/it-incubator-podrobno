import React, {useMemo, useState} from 'react'

export default {
    title: 'Recat.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

export type UserType = {
    users: Array<string>
}
const UserSecret = (props: UserType) => {
    console.log("Users")
    return (
        <div>
            {
                props.users.map((u, i) => (<div key={i}>{u}</div>))
            }
        </div>
    )
}

const Users = React.memo(UserSecret)

export const Example = () => {
    console.log("example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["ALex", "Jenny", "Jari"])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        /*users.push('Sveta' + new Date().getTime())*/
        setUsers(newUser)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}

// UseMemo

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    console.log(resultA)
    console.log(resultB)

    for (let i = 1; i <= b; i++) {
        let fake = 0
        resultB = resultB * i
        while (fake < 1000000) {
            fake++;
            const fakeValue = Math.random()
        }
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <h1>A: {resultA}</h1>
        <h1>B: {resultB}</h1>
    </>

}

export const LikeUseCallback = () => {
    console.log("example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["ALex", "Jenny", "Jari"])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        /*users.push('Sveta' + new Date().getTime())*/
        setUsers(newUser)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
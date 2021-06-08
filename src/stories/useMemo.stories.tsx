import React, {useMemo, useState} from 'react'

export default {
    title: 'UseMemo demo',
}


export type UserType = {
    users: Array<string>
}
const UserSecret = (props: UserType) => {
    console.log("Users secret")
    return (
        <div>
            {
                props.users.map((u, i) => (<div key={i}>{u}</div>))
            }
        </div>
    )
}

const Users = React.memo(UserSecret)

export const HelpsToReactMemo = () => {
    console.log("example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["ALex", "Jenny", "Jari"])

    const newAarray = useMemo(() =>{
        return users.filter( u => u.toLowerCase().indexOf("a"))
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            { counter }
            <Users users={ newAarray }/>
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


export const LikeUseCallBack = () => {
    console.log("example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["ALex", "Jenny", "Jari"])

    const newAarray = useMemo(() =>{
        return users.filter( u => u.toLowerCase().indexOf("a"))
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            { counter }
            <Users users={ newAarray }/>
        </>
    )
}


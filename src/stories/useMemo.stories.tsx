import React, {useCallback, useMemo, useState} from 'react'

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

    const newAarray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a"))
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newAarray}/>
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
    console.log("Like use Callback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["JS", "React", "CSS", "HTML"])

    const newAarray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a"))
    }, [books])

    /*
        const addBook = () => {
            const newBook = [ ...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    */

    /*const memoizedAddBook = useMemo( () => {
        return () => {
            const newBook = [ ...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    } , [books])*/

    const memoizedAddBook = useCallback(() => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)

    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            {counter}
            <Books
                addBook={memoizedAddBook}
                books={newAarray}/>
        </>
    )
}

type BookSecretType = {
    books: Array<string>
    addBook: () => void
}

const Books = (props: BookSecretType) => {
    console.log("Books secret")
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {
                props.books.map((book, i) => (<div key={i}>{book}</div>))

            }
        </div>
    )
}

const Book = React.memo(UserSecret)
import React, {useCallback, useEffect, useMemo, useState} from 'react'

export default {
    title: 'UseEffect demo',
}


export const SimpleExample = () => {
    console.log("Use Effect example")
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    const changer = (state: number) => {
        return state + 1
    }

    /*useEffect(() => {
        document.title = counter.toString()
        console.log("Use Effect")
    }, [])*/
    useEffect(() => {
        console.log("useEffect every render")
    })

    useEffect(() => {
        document.title = counter.toString()
        console.log("useEffect only first render component didmount ")
    }, [])
    useEffect(() => {
        document.title = counter.toString()
        console.log("UseEffect first render and every counter change")
    }, [counter])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>conuter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            {counter}
        </>
    )
}


export const SetTimeOutExample = () => {

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    console.log("Use Effect example")

    useEffect(() => {
        //console.log("useEffect every render")
        /*setTimeout(() => {
            document.title = counter.toString()
        }, 1000)*/

        const intervalId = setInterval(() => {
            setCounter((state) => {
                return state + 1
            })
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>conuter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
            {counter}
        </>
    )
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(0)
    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occured ")
        return () => {
            console.log("Reset effect")
        }
    }, [counter])

    return (
        <>
            Hello counter {counter}
            <button
                onClick={() => {setCounter(counter + 1)}}>+
            </button>
        </>
    )
}

export const KeyTrackerExample = () => {

    const [text, setText] = useState('')
    console.log("Component rendered", text)

    useEffect(() => {
        const handler = (e : KeyboardEvent ) => {
            console.log("", e.key)
            setText( state => state + e.key)
        }
        window.document.addEventListener("keypress",handler )
        return () => {
            console.log("Effect cleaned")
            window.document.removeEventListener("keypress", handler)
        }
    }, [])

    return (
        <>
            Hello counter {text}
        </>
    )
}

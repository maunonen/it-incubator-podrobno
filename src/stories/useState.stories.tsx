import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'UseState demo',
}

function genearteData () {
    console.log("Generate data")
    return 3479873497634
}



export const Example = () => {
    console.log("example")
    /*const initialValue = genearteData()*/
    /*const initialValue = useMemo(genearteData, [])*/
    const [counter, setCounter] = useState(genearteData)
    const changer = ( state : number ) => {
        return state  + 1
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(changer)}>+</button>
            { counter }
        </>
    )
}
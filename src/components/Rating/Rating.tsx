import React, {useState} from "react";


export type RatingPropsType = {
    // value : number,
    value : number
    onClick : (value : number ) => void
}
export function Rating(props:RatingPropsType) {

    return (
        <div>
            <Star
                onClick = {props.onClick}
                selected = {props.value > 0 }
                value = {1}
            />
            <Star
                value = {2}
                onClick = {props.onClick}
                selected={props.value > 1 }/>
            <Star
                value = {3}
                onClick = {props.onClick}
                selected={props.value > 2 }/>
            <Star
                value = {4}
                onClick = {props.onClick}
                selected={props.value > 3 }/>
            <Star
                value = {5}
                onClick = {props.onClick}
                selected={props.value > 4 }/>
        </div>
    )
}

/*type of props of star */
type StarPropsType = {
    selected : boolean
    onClick : (value : number ) => void
    value : number
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => { props.onClick(props.value) }}>
            { props.selected ? <b>star </b> : "star " }
        </span>
    )
}
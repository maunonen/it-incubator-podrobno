import React, {useReducer, useState} from 'react';
import UncotrolledAccordionTitle from "./UncotrolledAccordionTitle";
import UncotrolledAccordionBody from "./UncotrolledAccordionBody";


type UncotrolledAccordionPropsType = {
    titleValue: String,
    /*collapsed?: boolean*/
}
type ActionType = {
    type : string
}

const reducer = (state : boolean , action : ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED"){
        return !state
    }
    return state
}

function UncotrolledAccordion(props: UncotrolledAccordionPropsType) {
    /*const [collapsed, setCollapsed] =  useState(false )*/
    const [collapsed, dispatch] =  useReducer(reducer, false)
    return (
        <div>
            <UncotrolledAccordionTitle
                titleValue={props.titleValue}
                /*handleClick={ () => { setCollapsed(!collapsed) }}*/
                handleClick={ () => {dispatch(!collapsed) }}
            />
            {/*<button onClick={ () => { setCollapsed(!collapsed) }}>Toggle</button>*/}
            { collapsed && <UncotrolledAccordionBody/> }
        </div>
        )
}

export default UncotrolledAccordion;

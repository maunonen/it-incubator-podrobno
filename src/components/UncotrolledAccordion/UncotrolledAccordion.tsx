import React, {useReducer} from 'react';
import UncotrolledAccordionTitle from "./UncotrolledAccordionTitle";
import UncotrolledAccordionBody from "./UncotrolledAccordionBody";
import { reducer, TOGGLE_COLLAPSED } from './reducer';




type UncotrolledAccordionPropsType = {
    titleValue: String,
    /*collapsed?: boolean*/
}


function UncotrolledAccordion(props: UncotrolledAccordionPropsType) {
    /*const [collapsed, setCollapsed] =  useState(false )*/
    const [state, dispatch] =  useReducer(reducer, { collapsed : false})
    return (
        <div>
            <UncotrolledAccordionTitle
                titleValue={props.titleValue}
                /*handleClick={ () => { setCollapsed(!collapsed) }}*/
                handleClick={ () => {dispatch({ type : TOGGLE_COLLAPSED }) }}
            />
            {/*<button onClick={ () => { setCollapsed(!collapsed) }}>Toggle</button>*/}
            { state.collapsed && <UncotrolledAccordionBody/> }
        </div>
        )
}

export default UncotrolledAccordion;

import React from 'react';
//import AccordionBody from "./AccordionBody";
//import AccordionTitle from './AccordionTitle';



export type AccordionPropsType = {
    /**
     * Accordion title
     * */
    titleValue: String
    /**
     * True when collapsed
     * */
    collapsed: boolean
    onChanged: () => void
    /**
     * ELements which be showed when accordion is opened.
     * Each item must be [[ItemType]]
     * */
    items : Array<ItemType> // string[]
    onClick : (value : any) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                titleValue={ props.titleValue }
                onChanged={props.onChanged}
            />
            { props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            /> }
        </div>
        )
}

export default Accordion;

export type ItemType = {
    title : string
    value : any
}

export type AccordionBodyPropsType = {
    items : Array<ItemType> // string[]
    onClick : (value : any) => void
}

function AccordionBody ( props: AccordionBodyPropsType ) {
    return (
        <div>
            <ul>
                { props.items.map((item : ItemType, id : number) =>{
                    return <li onClick={() => {props.onClick(item.value)}} key={id}>{item.title}  {item.value}</li>
                })}
            </ul>

        </div>
    )
}

export type AccordionTitlePropsType = {
    titleValue : String
    onChanged : () => void
}
function AccordionTitle (props:AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ props.onChanged}>{props.titleValue}</h3>
        </div>
    )
}
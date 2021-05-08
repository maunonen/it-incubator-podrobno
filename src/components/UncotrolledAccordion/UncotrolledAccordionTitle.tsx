import React from 'react';


type AccordionTitlePropsType = {
    titleValue: String
    handleClick: () => void
}

function UncotrolledAccordionTitle (props:AccordionTitlePropsType) {
    const handleToggle = () => {

    }
    return (
        <div>
            <h3 onClick={()=> { props.handleClick()}}>{props.titleValue}</h3>
        </div>
    )
}

export default UncotrolledAccordionTitle;

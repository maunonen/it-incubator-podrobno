import React from 'react';


type AccordionTitlePropsType = {
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

export default AccordionTitle;

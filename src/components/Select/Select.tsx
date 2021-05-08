import React, {useState,useEffect, KeyboardEvent} from "react";
import s from './Select.module.css';

export type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    onClick: () => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [ props.value]);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value : any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log("press")
        if (e.key === "ArrowDown" || e.key === "ArrowUp"){
            for (let i = 0 ; i < props.items.length ; i++ ){
                if ( props.items[i].value ===  hoveredElementValue ) {
                    const pretenedentElement = e.key === "ArrowDown"
                                            ? props.items[i + 1]
                                            : props.items[i - 1]
                    if (pretenedentElement){
                        props.onChange(pretenedentElement.value);
                        /*setHoveredElementValue(props.items[i + 1].value);*/
                        return
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }
    return (
        <>
            <div
                onKeyUp={onKeyUp}
                tabIndex={0}
                className={s.select}>
                <span
                    className={s.main}
                    onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                                            onMouseEnter={() => {setHoveredElementValue(i.value)}}
                                            className={s.item + " "+ ( hoveredItem === i ? s.selected : "" ) }
                                            onClick={() =>onItemClick(i.value)}
                                            key={i.value}>{i.title}</div>)}
                </div>
                }

            </div>
        </>

    )
}
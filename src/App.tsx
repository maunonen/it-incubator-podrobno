import React, {useState} from 'react';
import './App.css';
import Accordion, { ItemType } from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncotrolledAccordion from "./components/UncotrolledAccordion/UncotrolledAccordion";
import {UncontrolledRating} from "./components/UnctrolledRating/Rating";

function App() {

    let [ ratingValue, setRatingValue ] = useState<number>(0);
    let [accordionCallapsed, setAccordionCollapsed] = useState<boolean>(false);

    const items : Array<ItemType> = [
        { title : 'some title 1', value : 3},
        { title : 'some title 2', value : 2},
        { title : 'some title 3', value : 3}
    ]

    const onClickCallback = (value : any) => {
        alert(value)
    }
    return (
    <div className="App">
        <OnOff on={true}/>
        <OnOff on={false}/>
        <OnOff on={true}/>
        <Accordion
            titleValue={"Controlled Accordion title"}
            collapsed={accordionCallapsed}
            onChanged={() => { setAccordionCollapsed(!accordionCallapsed)}}
            items={items}
            onClick={onClickCallback}
        />
        <UncotrolledAccordion titleValue={"uncotrolled accordion 1"}/>
        <UncotrolledAccordion titleValue={"uncotrolled with reducer"}/>


        <UncontrolledRating />

        <Rating
            value={ratingValue}
                onClick={setRatingValue}
        />

        {/*<OnOff on={false}/>
        <OnOff on={true}/>*/}
        <PageTitle title={"This is App Component"}/>
        <PageTitle title={"My friends"}/>
        Article 1
        {/*<Rating value={5}/>
        <Accordion
            titleValue={"Some Accordion title"}
            collapsed={false}
        />
        <Accordion
            titleValue={"Some Accordion title with list"}
            collapsed={true}
        />
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={5}/>*/}
    </div>
  );
}

type PageTitlePropsType  = {
    title : String
}

function PageTitle (props:PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

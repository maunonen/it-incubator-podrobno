import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
//import { actions } from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';


export default {
    title: 'components/Accordion stories',
    component: Accordion,
    argTypes : {
        color : {
            control : 'color'
        }
    }
} as Meta;

const callBacks = {
    onChanged: () => {
    }
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedTrue = Template.bind({});
CollapsedTrue.args = {
    ...callBacks,
    titleValue: 'Accordion Collapse True',
    collapsed: true,

    items: [{title: 'some title 1', value: 3}, {title: 'some title 2', value: 2}]
};

export const CollapsedFalse = Template.bind({});
CollapsedFalse.args = {
    ...callBacks,
    titleValue: 'Accordion Collapse False',
    collapsed: false,
    items: [
        {title: 'some title 1', value: 3},
        {title: 'some title 2', value: 2},
        {title: 'some title 3', value: 3}
    ]
};



export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion
        {...args}
        collapsed={value}
        onChanged={() => {
            setValue(!value)
        }}
        onClick={(id) => { alert(`User id ${id} is showin up`)}}
    />
}

ModeChanging.args = {
    titleValue: 'Accordion Collapse False',
    items:
        [
            {title: 'some title 1', value: 3},
            {title: 'some title 2', value: 2},
            {title: 'some title 3', value: 3}
        ],
}

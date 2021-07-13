import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import Clock from './Clock';

export default {
    title: 'Clock',
    component: Clock,
};

export const  BaseClockAnalogExample = () => <Clock mode={"analog"}/>;
export const  BaseClockDigitalExample = () => <Clock mode={"digital"}/>;

/*
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
*/




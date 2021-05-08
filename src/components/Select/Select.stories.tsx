import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import {Select, SelectPropsType, ItemType} from './Select'


export default {
    title: 'components/Select',
    component: Select,
} as Meta;


// @ts-ignore
const Template: Story<Select> = ( args ) => <Select {...args} />;

export const SelectWithValue = Template.bind({});
SelectWithValue.args = {
    on : true,
    value: "1",
    onChange : () => alert('Values is changed'),
    onClick: () => alert('li clicked'),
    items : [
        { value : "1", title : "Minsk"},
        { value : "2", title : "Moscow"},
        { value : "3", title : "NY"}
    ]
};

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    on : true,
    /*value: "2",*/
    onChange : () => alert('Values is changed'),
    onClick: () => alert('li clicked'),
    items : [
        { value : "1", title : "Minsk"},
        { value : "2", title : "Moscow"},
        { value : "3", title : "NY"}
    ]
};

export const SelectChange:Story<SelectPropsType> = (args) => {
    const [value, setValue ] = useState('2')
    return <Select
        value = {value}
        onChange = { setValue}
        onClick = { () => setValue  }
        items = {[
            { value : "1", title : "Minsk"},
            { value : "2", title : "Moscow"},
            { value : "3", title : "NY"}
        ]}
    />
}

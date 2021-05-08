import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { OnOff, OnOffPropsType } from './OnOff';


export default {
    title: 'components/OnOff',
    component: OnOff,
} as Meta;


const Template: Story<OnOffPropsType> = ( args ) => <OnOff {...args} />;

export const SwitchOn = Template.bind({});
SwitchOn.args = {
    on : true
};

export const SwitchOff = Template.bind({});
SwitchOff.args = {
    on : false
};


/*export const setOnOff :Story = (args) => {
    const [on, setOn ] = useState<boolean>(false)
    return <OnOff
        onClick={()=>{setOn(false)}}
    />
}*/


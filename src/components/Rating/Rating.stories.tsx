import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
//import { actions } from '@storybook/addon-actions';
import {Rating, RatingPropsType } from './Rating';
//import { RatingPropsType } from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;

//const callback = actions("");

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const OneStar = Template.bind({});
OneStar.args = {
    value: 1,
    onClick: () => console.log('Rating 1')
};

export const TwoStar = Template.bind({});
TwoStar.args = {
    value: 2,
    onClick: () => console.log('Rating 2')
};

export const ThreeStar = Template.bind({});
ThreeStar.args = {
    value: 3,
    onClick: () => console.log('Rating 3')
};

export const FourStar = Template.bind({});
FourStar.args = {
    value: 4,
    onClick: () => console.log('Rating 4')
};

export const FiveStar = Template.bind({});
FiveStar.args = {
    value: 5,
    onClick: () => console.log('Rating 5')
};

export const ChangeRating :Story<RatingPropsType> = (args) => {
    const [rating, setRating ] = useState<number>(0)
    return <Rating
        value={rating}
        onClick={setRating}
    />
}


/*export const ChangeRating = Template.bind({});
FiveStar.args = {
    value: 0,
    onClick: () => console.log('Rating 5')
}*/

/*
export const handleRating = ( e :any ) => {
    const [rating, setRating] = useState<RatingPropsType>();
    setRating(e.currentTarget.value)
}*/

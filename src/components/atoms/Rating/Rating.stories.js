import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs/react'
import Rating from './Rating'

export default {
    component: Rating,
    title: "Rating",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Rating rating={number("rating", 4.2)} />
    )
}
import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs/react'
import StarRating from './StarRating'

export default {
    component: StarRating,
    title: "StarRating",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <StarRating rating={number("rating", 5.0)} />
    )
}
import React from 'react'
import {withKnobs, text } from '@storybook/addon-knobs/react'
import Genre from './Genre'

export default {
    component: Genre,
    title: "Genre",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Genre genre={text("text","Here goes the Genre of movie")} />
    )
}
import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import Title from './Title'

export default {
    component: Title,
    title: "Title",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Title title={text("title", "Here goes the Movie Title")} />
    )
}
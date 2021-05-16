import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import Header from './Header'

export default {
    component: Header,
    title: "Header",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Header title={text("text", "Here goes the Header of application")} />
    )
}
import React from 'react'
import {withKnobs, text } from '@storybook/addon-knobs/react'
import Description from './Description'
import { ColorPalette } from '@storybook/components'

export default {
    component: Description,
    title: "Description",
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: 'Gives the description of a movie'
    }
}

export const Default = () => {
    return (
        <Description description={text("text","Here goes the description of movie")} />
    )
}
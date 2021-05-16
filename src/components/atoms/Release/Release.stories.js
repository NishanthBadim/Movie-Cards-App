import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs/react'
import Release from './Release'

export default {
    component: Release,
    title: "Release",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Release year={number("year", 2019)} />
    )
}
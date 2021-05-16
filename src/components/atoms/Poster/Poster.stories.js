import React from 'react';
import Furious from '../../../images/Furious7.jpg';
import { withKnobs, text, files } from '@storybook/addon-knobs/react'
import Poster from './Poster'

export default {
    component: Poster,
    title: "Poster",
    decorators: [withKnobs]
}

export const Default = () => {
    return (
        <Poster
            image={files('Image', '.jpg', Furious)}
            video={text("VideoID", "Skpu5HaVkOc")}
        />
    )
}


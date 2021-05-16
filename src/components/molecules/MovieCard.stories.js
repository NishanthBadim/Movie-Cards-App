import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import MovieCard from './MovieCard'

export default {
    component: MovieCard,
    title: "MovieCard",
    decorators: [withKnobs]
}

let movie={
        "id": 600,
        "title": "Furious 7",
        "genre": "Action/Thriller",
        "description": "Dominic and his family are caught in a quagmire when Shaw's brother seeks bloody revenge. They must save a crucial program from falling into the wrong hands.",
        "year": 2015,
        "imageUrl": "Furious",
        "videoId": "Skpu5HaVkOc",
        "rating": 4.1
}

export const Default = () => {
    return(
        <MovieCard movie={object("movie",movie)}/>
    )
}
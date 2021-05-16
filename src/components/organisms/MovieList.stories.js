import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import MovieList from './MovieList'

export default {
    component: MovieList,
    title: "MovieList",
    decorators: [withKnobs]
}
let movies=[
    {
        "id": 100,
        "title": "Avengers: Endgame",
        "genre": "Action/Sci-Fi",
        "description":"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        "year": 2019,
        "imageUrl": "Endgame",
        "videoId": "hA6hldpSTF8",
        "rating": 4.9
    },
    {
        "id": 200,
        "title": "Joker",
        "genre": "Drama/Crime",
        "description": "Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
        "year": 2019,
        "imageUrl": "Joker",
        "videoId": "zAGVQLHvwOY",
        "rating": 4.7
    }
]

export const Default = () => {
    return(
        <MovieList movies={object("movies",movies)}/>
    )
}
import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'
import './../../../index.css'

import SearchBar from './SearchBar'

export default {
    component: SearchBar,
    title: "SearchBar",
    decorators: [withKnobs]
}
export const Default = () => {
    return (
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <SearchBar value={text("value", "")} result={text("results", "")}
                changed={action("Entered Input")} />
        </div>
    )
}
export const MultipleResults = () => {
    return (
        <SearchBar value={text("value", "")} result={text("results", " 2 Results Found")}
            changed={action("Entered Input")} />
    )
}

export const SingleResult = () => {
    return (
        <SearchBar value={text("value", "")} result={text("results", " 1 Result Found")}
            changed={action("Entered Input")} />
    )
}

export const NoResults = () => {
    return (
        <SearchBar value={text("value", "")} result={text("results", "No Results Found")}
            changed={action("Entered Input")} />
    )
}
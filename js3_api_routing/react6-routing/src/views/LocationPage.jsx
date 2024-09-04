import React from 'react'
import { useParams } from 'react-router-dom'

const LocationPage = () => {
    const {city, color} = useParams();
    return (
        <fieldset>
            <legend>LocationPage.jsx</legend>
            <h3 style={{color: color}}>You are travelling to {city}</h3>
        </fieldset>
    )
}

export default LocationPage
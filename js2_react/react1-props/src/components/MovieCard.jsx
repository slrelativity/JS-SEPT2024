import React from 'react'

const MovieCard = (props) => {
    const {title, rating, tags} = props;
    return (
        <fieldset>
            <legend>MovieCard</legend>
            <h2>Title: {props.title}</h2>
            <h3>Rating: {rating}</h3>
            <ul>
                {
                    tags.map((eachTag, idx)=>
                            <li key={idx}>#{eachTag}</li>
                        )
                }
                
            </ul>
        </fieldset>
    )
}

export default MovieCard
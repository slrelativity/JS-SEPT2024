import React, { useState, useEffect } from 'react'
import axios from "axios";

const FetchPokemonOnLoad = () => {
    // state variable to keep track of the change
    const [pokemon, setPokemon] = useState();

    const [errMessage, setErrMessage] = useState("Loading");

    const [id, setId] = useState(1);

    // The following useEffect will be executed when the component is rendered/mounted
    useEffect(()=>{
        console.log("Starting the function")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response=>{ // RESOLVED 
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err=> {
                console.log(err)
                setErrMessage("The pokemon is not available")
            }) // REJECTED 
    } , [id]) // second argument -- NEVER PUT THE STATE VARIABLES INSIDE USEEFFECT


    const randomIdGenerator = () =>{
        const randId = Math.floor(Math.random() * 1200);
        // Math.random() return a number less than 1  
        // Math.random() * 1200 --> a number between 1 to 1200
        setId(randId);
    }

    return (
        <div>
            <h1>Random Pokemon generator</h1>
            <button onClick={randomIdGenerator}>Fetch a random pokemon</button>
            <h3>ID: {id}</h3>
            {
                pokemon?
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <ul>
                            {pokemon.abilities.map((eachAbility, idx)=>{
                                return(
                                    <li key={idx}>{eachAbility.ability.name}</li>
                                )
                            })}
                        </ul>
                    </div>:
                    <h1>{errMessage}</h1>
            }
        </div>
    )
}

export default FetchPokemonOnLoad
import React, { useState, useEffect } from 'react'
import axios from "axios";

const FetchPokemonOnLoad = () => {
    // state variable to keep track of the change
    const [pokemon, setPokemon] = useState();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(response=>{
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err=> console.log(err))
    } , [])

    return (
        <div>
                        {
                pokemon?
                    <div>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>:
                    <h1>Loading...</h1>
            }
        </div>
    )
}

export default FetchPokemonOnLoad
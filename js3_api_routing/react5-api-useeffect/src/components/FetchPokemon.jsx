import React, {useState} from 'react';
import axios from "axios";

const FetchPokemon = () => {
    // Variable that would keep changing : state variables
    const [pokemon, setPokemon] = useState();

    const fetchPokemon1 = ()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`) // promise
            .then(response =>{
                console.log(response) // status of the response
                return response.json(); // .json is another promise
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                setPokemon(jsonResponse);
            })
            .catch(err=> {
                console.log(err)
            })
    }

    const fetchPokemonWithAxios = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`)
            .then(response=>{
                console.log(response);
                setPokemon(response.data);
            })
            .catch(err=>console.log(err))
    }

    const fetchPokemonWithAxiosAsync = async() =>{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            setPokemon(response.data)
        }catch(err){
            console.log(err)
        }

    }


    return (
        <div>
            <h3>Pokemon Fetch Demo</h3>
            <button onClick={fetchPokemon1}>Fetch pokemon!</button>
            <button onClick={fetchPokemonWithAxios}>Fetch with Axios!</button>
            <button onClick={fetchPokemonWithAxiosAsync}>Fetch with Axios & async!</button>

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

export default FetchPokemon
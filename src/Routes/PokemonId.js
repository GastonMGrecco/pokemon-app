import {useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const PokemonId = () => {

  const {id}=useParams();

  const [pokemon,setPokemon]=useState([]);

useEffect(()=>{
 axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
 .then(res=>setPokemon(res?.data));
},[id])

console.log(pokemon)
    
    return (
        <div>
            <h1>{id}</h1>
            <img src={pokemon.sprites?.front_default} alt=""/>

        </div>
    );
};

export default PokemonId;
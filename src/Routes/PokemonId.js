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
        <div className='TarjetaInd'style={
            pokemon.types?.[0].type.name==="fighting"?
            {backgroundColor:"orangered"}:
            pokemon.types?.[0].type.name==="flying"?
            {backgroundColor:"yellow"}:
            pokemon.types?.[0].type.name==="poison"?
            {backgroundColor:"purple"}:
            pokemon.types?.[0].type.name==="ground"?
            {backgroundColor:"brown"}:
            pokemon.types?.[0].type.name==="rock"?
            {backgroundColor:"mediumseagreen"}:
            pokemon.types?.[0].type.name==="bug"?
            {backgroundColor:"pink"}:
            pokemon.types?.[0].type.name==="ghost"?
            {backgroundColor:"black"}:
            pokemon.types?.[0].type.name==='steel'?
            {backgroundColor:"pink"}:
            pokemon.types?.[0].type.name==='fire'?
            {backgroundColor:"red"}:
            pokemon.types?.[0].type.name==='water'?
            {backgroundColor:"skyblue"}:
            pokemon.types?.[0].type.name==='grass'?
            {backgroundColor:"darkgreen"}:
            pokemon.types?.[0].type.name==='electric'?
            {backgroundColor:"yellow"}:
            pokemon.types?.[0].type.name==='psichic'?
            {backgroundColor:"peru"}:
            pokemon.types?.[0].type.name==='ice'?
            {backgroundColor:"red"}:
            pokemon.types?.[0].type.name==='dragon'?
            {backgroundColor:"khaki"}:
            pokemon.types?.[0].type.name==='dark'?
            {backgroundColor:"grey"}:
            pokemon.types?.[0].type.name==='fairy'?
            {backgroundColor:"pink"}:
            pokemon.types?.[0].type.name==='unknown'?
            {backgroundColor:"grey"}:
            pokemon.types?.[0].type.name==='shadow'?
            {backgroundColor:"black"}:{backgroundColor:"lightgoldenrodyellow"}
        
        }>
            <h1 className='NombreTarInd'>{id}</h1>
            <img className="ImagenGrande"src={pokemon.sprites?.other.dream_world.front_default} alt=""/>
           <div>
           <h2>Habilidades:</h2>
            <p>{pokemon.abilities?.[0].ability.name}</p>
            <p>{pokemon.abilities?.[1].ability.name}</p>
            <h2>Pokemón tipo:</h2>
            <p>{pokemon.types?.[0].type.name}</p>
            </div>
        </div>
    );
};

export default PokemonId;
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState}from 'react';
import axios from 'axios';

const Tarjeta = ({url}) => {
    
    console.log(url)

    const [pok,setPok]=useState([]);

    useEffect(()=>{
        axios.get(url).then(res=>setPok(res?.data))

    },[url])
    
 
    
    return (
         <div className='tarjeta' style={
            pok?.types[0]?.type?.name==="fighting"?
            {backgroundColor:"orange"}:
            pok?.types[0]?.type?.name==="flying"?
            {backgroundColor:"yellow"}:
            pok?.types[0]?.type?.name==="poison"?
            {backgroundColor:"purple"}:
            pok?.types[0]?.type?.name==="ground"?
            {backgroundColor:"brown"}:
            pok?.types[0]?.type?.name==="rock"?
            {backgroundColor:"grey"}:
            pok?.types[0]?.type?.name==="bug"?
            {backgroundColor:"green"}:
            pok?.types[0]?.type?.name==="ghost"?
            {backgroundColor:"black"}:
            pok?.types[0]?.type?.name==='steel'?
            {backgroundColor:"pink"}:
            pok?.types[0]?.type?.name==='fire'?
            {backgroundColor:"red"}:
            pok?.types[0]?.type?.name==='water'?
            {backgroundColor:"blue"}:
            pok?.types[0]?.type?.name==='grass'?
            {backgroundColor:"violet"}:
            pok?.types[0]?.type?.name==='electric'?
            {backgroundColor:"yellow"}:
            pok?.types[0]?.type?.name==='psichic'?
            {backgroundColor:"peru"}:
            pok?.types[0]?.type?.name==='ice'?
            {backgroundColor:"red"}:
            pok?.types[0]?.type?.name==='dragon'?
            {backgroundColor:"gray"}:
            pok?.types[0]?.type?.name==='dark'?
            {backgroundColor:"grey"}:
            pok?.types[0]?.type?.name==='fairy'?
            {backgroundColor:"pink"}:
            pok?.types[0]?.type?.name==='unknown'?
            {backgroundColor:"grey"}:
            pok?.types[0]?.type?.name==='shadow'?
            {backgroundColor:"black"}:{backgroundColor:"white"}
        
        } >
            <Link className='link' to={`/pokedex/${pok.name}/`}>
                
                <h2>{pok?.name}</h2>
                <img src={pok?.sprites?.front_default}alt=""/>
                
            </Link>
        </div>
    );
};

export default Tarjeta;
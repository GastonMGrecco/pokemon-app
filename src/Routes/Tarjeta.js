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
    console.log(pok)
    return (
        <div>
            <Link to={`/pokedex/${pok.name}/`}>
                <h2>{pok.name}</h2>
                <img src={pok.sprites?.front_default}alt=""/>
                
            </Link>
        </div>
    );
};

export default Tarjeta;
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

const Input = () => {
    const [nombre,setNombre]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const submit=e=>{
        e.preventDefault();
        dispatch({ type: "USUARIO", payload: nombre });
        navigate("/pokedex");

    }
    return (
        
            <form className='formulario' onSubmit={submit}>
                <label htmlFor="usuario">¿Cómo te llamas?</label>
                <input type= "text"id="usuario" value={nombre} onChange={e=>setNombre(e.target.value)} /> 
                <button>Ingresar</button>
            </form>              
       
    );
};

export default Input;
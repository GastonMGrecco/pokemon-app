import React from 'react';
import { useSelector } from 'react-redux';
import {useEffect,useState}from 'react';
import axios from "axios";
import Tarjeta from './Tarjeta';
import {useNavigate} from 'react-router-dom';




const Pokedex = () => {
    const getNombre=useSelector(state=>state.usuario);
    const [pokemons,setPokemons]=useState([]);
   // const [boton,setBoton]=useState(0);
   // const [contador,setContador]=useState(0)
    const [tipo,setTipo]=useState([]);
    const [num,setNum]=useState("0");
    const [nombre,setNombre]=useState();

   let navigate=useNavigate();

    const submit=e=>{
        e.preventDefault();
        navigate(`/pokedex/${nombre}/`)
      
    }
    /*
    const sumar=()=>{
        if(boton<54){
            setBoton(boton + 1)
            setContador(contador+20);
        }
        
    }
    const restar=()=>{
        if(boton>0){
            setBoton(boton - 1)
            setContador(contador-20);
        
        }
    }
    */
    useEffect(()=>
        {   
            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=1&limit=20`)
            .then(res=>setPokemons(res?.data.results))   
        },[])
        useEffect(()=>
        {   if(num!=="0"){
            axios.get(`https://pokeapi.co/api/v2/type/${num}/`)
            .then(res=>setTipo(res?.data?.pokemon))
        }
        },[num])
        console.log(tipo)

    return (
        <div className='pokedex'>
           
           <div className='saludo'> Hola {getNombre}!</div>
           <form onSubmit={submit}>
                <div className='ingreso'>
                    <input id="usuario" value={nombre}onChange={e=>setNombre(e.target.value)}></input>
                    <button className='pokeboton'></button>
                </div>
           </form>
           <select onChange={e=>setNum(e.target.value)}>
                <option value="0">Todos los pokemons</option>
                <option value="1">Normales</option>
                <option value="2">Luchadores</option>
                <option value="3">Voldares</option>
                <option value="4">Venenosos</option>
                <option value="5">Tierra</option>
                <option value="6">Roca</option>
                <option value="7">Insecto</option>
                <option value="8">Fantasma</option>
                <option value="9">Acero</option>
                <option value="10" >Fuego</option>
                <option value="11" >Agua</option>
                <option value="12" >Planta</option>
                <option value="13" >Electrico</option>
                <option value="14" >Psíquico</option>
                <option value="15" >Hielo</option>
                <option value="16" >Dragon</option>
                <option value="17" >Obscuro</option>
                <option value="18" >Hada</option>
                <option value="20" >Sombra</option>
                <option value="19" >Desconocido</option>
           </select>
          {/*   <button value="anterior"style={boton===0?{  visibility: "hidden"}: {visibility: "visible"}}onClick={restar}>anterior</button>
                <button value={boton}onChange={e=>setBoton(e.target.value)}>{boton}</button>
    <button value="siguiente"style={boton===54?{  visibility: "hidden"}: {visibility: "visible"}}onClick={sumar}>siguiente</button>*/}
        <ul>
            {num==="0"?pokemons.map(pokemon=>(
                
                <Tarjeta key={pokemon?.url} url={pokemon?.url}/>
                 )):tipo.map(pokemon=>(
                
                    <Tarjeta key={pokemon?.pokemon?.url} url={pokemon?.pokemon?.url}/>
                     ))}
        </ul>
        </div>
    );
}

export default Pokedex;
import React, {useState}from 'react'
import axios from 'axios'

const Karmel = () => {
    const [pokemons, setPokemons]=useState([]);
    const ClickHandler=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        // .then(res=>res.json())
        // .then(res=>setPokemons(res.result))
        .then(res=>setPokemons(res.data.results))
        .catch(res=>console.log(res))
    }
    return (
        <div>
            <button onClick={ClickHandler}> Fetch Pokemon</button>
            {pokemons.map((pok,index)=><li>{pok.name}</li>
            )}
        </div>
    )
}

export default Karmel


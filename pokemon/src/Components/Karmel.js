import React, {useState}from 'react'

const Karmel = () => {
    const [pokemons, setPokemons]=useState([]);
    const ClickHandler=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res=>res.json())
        .then(res=>setPokemons(res.results))

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


import { useState } from "react";
import { useEffect } from "react";
import './pokedex.css'

function Pokedex(){
    const [id, setid] = useState(1);
    const [pokemon, setPokemon] = useState(null);

    const fetchData = async() =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    const nextPokemon = () => {
        setid(id + 1);
    }
    const previousPokemon = () => {
        setid(id - 1);
    }

    return(
        <div>
            <h1>Pokédex</h1>
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>  
            )}
            <button onClick={nextPokemon}>Próximo</button>
            <button onClick={previousPokemon}>Anterior</button>
        </div>
    )
}

export default Pokedex;
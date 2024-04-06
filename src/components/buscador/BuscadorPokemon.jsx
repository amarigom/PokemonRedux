import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from '../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
    const dispatch= useDispatch();
    const [pokemon_name,setPokemon_name]= useState('mewtwo');
    return (
        <div className ="form-group">
             <label htmlFor="" className="text-white"  >Buscar Pokemon</label>
             <input type="text" className='form-control' id='buscar_pokemon' value={pokemon_name} 
             onChange= {
                (event) =>{ 
                    setPokemon_name(event.target.value)
                }
             } ></input>
             <button className='btn btn-primary mt-3' onClick={ () => { dispatch(fetchPokemon(pokemon_name)) }}>Enviar</button>
        </div>
        
            
        
    );
}

export default BuscadorPokemon;

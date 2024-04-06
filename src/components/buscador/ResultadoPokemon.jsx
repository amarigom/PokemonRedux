import React from 'react';
import {useSelector} from 'react-redux';

const ResultadoPokemon = () => {
  const buscador= useSelector((state)=>state.buscador);

  return (
    <div>
      
      <h3 className='text-white '>resultado:</h3>
      { buscador.loading &&
          <div className='text-warning'>Buscando...</div>}
      {buscador.pokemon.lenght >=1 && <div className='text-succes'>
        <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon"/>
        <span className={buscador.pokemon[0].name}></span>
      {buscador.error !== ' ' && 
          <span className="text-danger">Error</span>}
        
      </div>}
    </div>
  )
}

export default ResultadoPokemon;

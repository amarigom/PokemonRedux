import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import game_shop from './redux/reducers/gameShopReducer'




const CantidadPokemon =()=> { 

  const game_shop1= useSelector((State)=>
    game_shop
  );
  
  return (
    <div>
      <Fragment>Unidades:{game_shop1.pokemon}</Fragment>
    </div>
  );
 }

export default CantidadPokemon

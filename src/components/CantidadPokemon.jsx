import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class CantidadPokemon extends Component {
  render(){
  return (
    <div>
      <Fragment>Unidades:{this.props.game_shop.pokemon}</Fragment>
    </div>
  )
}
}
 
const mapStateToProp= (state)=>{
  return{
      game_shop: state.game_shop
  }
 }

export default connect(mapStateToProp)(CantidadPokemon)

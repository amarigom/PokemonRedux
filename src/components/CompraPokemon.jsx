import React, { Component } from 'react';
import {buy_pokemon,return_pokemon} from './redux/actions/gameShopAction';
import { connect } from 'react-redux';

class CompraPokemon extends Component {
  render(){
  return (
    <div>
      <button className=' btn btn-dark btn-sm mb-2' onClick={()=>this.props.buy_pokemon(1)} >Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm mb-1" onClick={()=>this.props.return_pokemon(1)}> Regresar Pokemon</button>
    </div>
  )
}
}
const mapDispatchToProps= {
  buy_pokemon,return_pokemon

};

export default connect(null, mapDispatchToProps)(CompraPokemon) ;

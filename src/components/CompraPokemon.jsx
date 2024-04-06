import { useDispatch } from 'react-redux';
import {buy_pokemon,return_pokemon} from './redux/actions/gameShopAction';


const CompraPokemon =()=> {
  const dispatch= useDispatch();
  return (
    <div>
      <button className=' btn btn-dark btn-sm mb-2' onClick={()=>dispatch(buy_pokemon(1))} >Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm mb-1" onClick={()=>dispatch(return_pokemon(1))}> Regresar Pokemon</button>
    </div>
  )

}
const mapDispatchToProps= {
  buy_pokemon,return_pokemon

};

export default CompraPokemon ;

import axios from "axios"

export const FETCH_POKEMON_REQUEST= 'FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCES='FETCH_POKEMON_SUCCES'
export const FETCH_POKEMON_FAILURE='FETCH_POKEMON_FAILURE'

// Actions

export const fetchPokemonRequest=()=>{
return{
    type: FETCH_POKEMON_REQUEST,
    }

}
export const fetchPokemonSucces =(Pokemon)=>{
    return{
        type: FETCH_POKEMON_REQUEST,
        payload: Pokemon
    }
}

export const fetchPokemonFailure=(error)=>{
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }

}

export const fetchPokemon=(valor)=>{
    return (dispatch)=>{
        dispatch(fetchPokemonRequest());
        axios.get(` https://pokeapi.co/api/v2/pokemon/?=${valor}/`)
        .then((response)=>{
            dispatch(fetchPokemonSucces([response.data]));
            console.log(response);
        })
        .catch((error)=> {
            dispatch(fetchPokemonFailure('No se encontro el pokemon'));
        })

    }

    }
    // Ahora estas 3 acciones que envolvimos, tuienen que ser despachadas por el REDUCER y organizadas




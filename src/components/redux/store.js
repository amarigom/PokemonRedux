// import { createStore } from "redux";
import { legacy_createStore as createStore} from 'redux';
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore} from "@reduxjs/toolkit";
// const store = createStore(rootReducers, composeWithDevTools());

// const store = createStore(
//     rootReducers,
//     composeWithDevTools(
      
      
//     ),
//   );
const store= createStore(rootReducers, composeWithDevTools());

export default store;
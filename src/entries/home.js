import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/container/home'
// import PlaylistContainer from './src/playlist/components/playlist-container'
// import data from '../data/api.json'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/index' 
import {Map as map} from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'




// const logger = ({getState, dispatch}) => next => action => {
//       console.log('action', action);
//       const value = next(action)
//       console.log('action after', getState().toJS())
//       return value
//       }

// const initialState = {
//   data :{
//     playlists: {
//       ...playlists
//     },
//     users: {
//       ...userdata
//     },
//     entities: data.entities,
//     categories: data.result.categories
//   },
//   search: []
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
      )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log('Hola mundo');

const HomeContainer = document.getElementById('home-container')


// const holaMundo = <h1>Hola mundo!</h1>



render(<Provider store={store}>
          <Home/>
        </Provider>
, HomeContainer)

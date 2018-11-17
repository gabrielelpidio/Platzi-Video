import schema from '../schemas/index';
import userdata from '../data/users.json'
import playlists from '../data/playlist.json'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../action-types';

const initialState = fromJS({
  playlists: {
    ...playlists
  },
  users: {
    ...userdata
  },
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
})

const data = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ENTITIES: {   
      return state.set('search', action.payload.query)
      
    //   let results = []
    //   const list = state.data.categories;
    //   if (action.payload.query) {
    //     results = () =>
    //       [].concat.apply(
    //         [],
    //         list.map(element =>
    //           element.playlist.filter(item =>
    //             item.author.toLowerCase().includes(action.payload.query.toLowerCase())
    //         )
    //       )
    //     );
    //   }

    //   return {
    //     ...state,
    //     search: results()
    //   };
    }

    default:
      return state;
  }
};

export default data;

import { SEARCH_ENTITIES, CLOSE_MODAL, OPEN_MODAL, IS_LOADING } from "../action-types";

export const openModal = (mediaId) => {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const isLoading = (value) => ({
  type: IS_LOADING,
  payload:{
    value
  }
})

export const searchEntities = (query) => {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query
    }
  }
}

export const searchAsyncEntities = (query) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 3000);
  }
}




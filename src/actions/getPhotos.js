import { unsplash } from '../unsplash';

export const getPhotos = (query) => {
    return async function(dispatch, getState) {
        const results  = await unsplash.search.getPhotos({
            query: query,
            perPage: 30
        })
        dispatch({
            type: "GET_PHOTOS",
            payload: results.response.results
        })
    }
}

export const getCurrentQuery = (newQuery) => {
    return async function(dispatch) {
        dispatch({
            type: "CHANGE",
            payload: newQuery
        })
    }
}

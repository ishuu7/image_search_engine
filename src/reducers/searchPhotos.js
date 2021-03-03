export const resultingPhotos = (state = { photos: []}, action) => {
    switch(action.type) {
        case "GET_PHOTOS":
            return {
                photos: action.payload
            }
        default:
            return state;
    }
}

export const queryChange = (state = '', action) => {
    switch(action.type) {
        case "CHANGE":
            return {
                photos: action.payload
            }
        default:
            return state;
    }
}
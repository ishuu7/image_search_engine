import { createApi } from 'unsplash-js';

export const unsplash = new createApi({
    accessKey: `${process.env.REACT_APP_ACCESS_KEY}`
});
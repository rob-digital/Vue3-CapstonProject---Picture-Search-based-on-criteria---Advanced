import { createStore } from 'vuex'
import { albums } from '../js/albums.js'
import { photos } from '../js/photos.js'

export const store = createStore({
    modules: {
        albums,
        photos
    }
})
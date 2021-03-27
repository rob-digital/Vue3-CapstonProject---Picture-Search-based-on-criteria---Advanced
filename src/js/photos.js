export const photos = {
    namespaced: true,

    state() {
        return {
            currentAlbumPhotos: [],
            loading: false, 
            photoCache :{ }
        }
    },

    mutations: {
        updatePhotos(state, { photos, albumId }) {
            state.currentAlbumPhotos = photos
            state.photoCache[albumId] = photos
        },
        setLoading(state, loading) {
            state.loading = loading
        }
    },

    actions: {
        async fetchPhotosForAlbum(ctx, { id }) {

            if(ctx.state.photoCache[id]) {
                ctx.commit('updatePhotos', {photos: ctx.state.photoCache[id], albumId: id })
                return
            }

            ctx.commit('setLoading', true)
            const photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            const data = await photos.json()
            ctx.commit('updatePhotos', { photos: data, albumId: id })
            console.log(data)
            ctx.commit('setLoading', false)

        }
    }
}
export const albums = {
    namespaced: true,

    state() {
        return {
            all: []
        }
    },

    mutations: {
        updateAlbums(state, payload) {
            state.all = payload
        }
    },

    actions: {
      async fetchAlbums(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await res.json()
            ctx.commit('updateAlbums', data)
        }
    }
}
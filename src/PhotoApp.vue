<template>
  <Layout>
    <template v-slot:header>Header</template>
    <template v-slot:sidebar>Side

       <Album v-for="album in albums" :album="album"/>
        
    </template>

    <template v-slot:content >
      <router-view/>
    </template>
  </Layout>
</template>

<script>
import Layout from'./components/Layout.vue'
import Album from'./components/Album.vue'

export default {
  components: {
    Layout,
    Album
  },


  created() {
    this.$store.dispatch('albums/fetchAlbums')
  },

  watch: {
    $route: {
      handler(val) {
        this.fetchPhotoAlbum(val.params.id)
      },
      immediate: true
    }
  },

  methods: {
    fetchPhotoAlbum(albumId) {
       this.$store.dispatch('photos/fetchPhotosForAlbum', { id: albumId })
    }
  },

  computed: {
    albums() {
     return this.$store.state.albums.all
    },
    
  }
}
</script>


<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
</style>
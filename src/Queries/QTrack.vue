<template>
    <div class="track-list">
        <span>
            <slot v-bind:tracks="getTracks"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Track",
        computed: {
            getTracks() {
                return this.$static.tracks &&
                    this.$static.tracks.edges.map(e => e.node)
            }
        }
    }
</script>

<style scoped>
    .track-list {
        float:left;
        margin-right: 50px;
        max-width: 33.33%;
    }

  .album-image {
    width: 250px;
    height: 250px;
  }
</style>

<static-query>
query Tracks {
  tracks: allTracks {
    totalCount
    edges {
      node {
        name
        trackInfo {
          items {
            external_urls{spotify}
            album {
              name
              artists {
                name
                external_urls {spotify}
                type
              }
              images {url}
            }
          }

        }
      }
    }
  }
}
</static-query>
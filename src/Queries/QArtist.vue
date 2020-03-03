<template>
    <div class="artist-list">
        <span>
            <slot v-bind:strapiArtists="strapiArtists"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Artist",
        computed: {
            strapiArtists() {
                return this.$static.strapiArtists &&
                    this.$static.strapiArtists.edges.map(e => e.node)
            }
        }
    }
</script>

<style scoped>

</style>

<static-query>
query Artists($page: Int) {
    strapiArtists: allStrapiArtists(perPage: 5, page: $page, limit: 100) @paginate {
        edges {
            node {
                id
                Name
            }
        }
    }
}
</static-query>
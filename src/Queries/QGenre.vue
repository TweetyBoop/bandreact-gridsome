<template>
    <div class="genre-list">
        <span>
            <slot v-bind:strapiGenres="strapiGenres"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Genre",
        computed: {
            strapiGenres() {
                return this.$static.strapiGenres &&
                    this.$static.strapiGenres.edges.map(e => e.node)
            }
        }
    }
</script>

<style scoped>

</style>

<static-query>
query Genres($page: Int) {
    strapiGenres: allStrapiGenres(perPage: 5, page: $page) @paginate {
        edges {
            node {
                id
                Name
                artists { Name }
            }
        }
    }
}
</static-query>
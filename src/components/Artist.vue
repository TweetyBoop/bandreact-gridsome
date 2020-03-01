<template>
    <!--<p>{{ $page.strapiArtists.edges.node }}</p>-->

    <!--<div v-for="edge in $page.strapiArtists.edges" :key="edge.node.id">-->
        <p>{{ $page.strapiArtists.edges }}</p>
        <!--<p v-html="edge.node.Name"></p>-->
        <!--<p v-html="edge.node.Description"></p>-->
    </div>

</template>

<script>
    export default {
        name: "Artist.vue"
    }
</script>

<style scoped>

</style>


<page-query>
query Artists ($page: Int) {
    strapiArtists: allStrapiArtists (perPage: 2, page: $page) @paginate {
        edges {
            node {
                Name
                Description
                Logo {id}
            }
        }
    }
}
</page-query>
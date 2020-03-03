<template>
    <QArtists v-slot="{ strapiArtists: strapiArtists }">
        <h3>Featured Artists</h3>
        <template v-for="fartist in strapiArtists">
            <h4>{{fartist.Name}}</h4>
        </template>
    </QArtists>
</template>
<script>
    export default {
        components: {
            QArtists: () => import('../Queries/QArtist.vue')
        }
    }
</script>
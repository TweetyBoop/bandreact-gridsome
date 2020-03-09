<template>
    <QGenres v-slot="{ strapiGenres: strapiGenres }">
        <h3>Featured Genres</h3>
        <template v-for="fgenre in strapiGenres">
            <h4>{{fgenre.Name}}</h4>
            <div v-for="fartist in fgenre.artists">
                <h6>{{fartist.Name}}</h6>
            </div>
        </template>
    </QGenres>
</template>
<script>
    export default {
        components: {
            QGenres: () => import('../Queries/QGenre.vue')
        }
    }
</script>
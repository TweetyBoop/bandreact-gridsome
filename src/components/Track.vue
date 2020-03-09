<template>
    <QTracks v-slot="{ tracks: getTracks }">
        <h3>Featured Tracks</h3>
        <template v-for="track in getTracks">
            <strong>{{track.name}}</strong>
            <template v-for="album in track.trackInfo.items">
                <p>Artist: {{album.album.artists[0].name}}
                <br />Album: {{album.album.name}}</p>
                <g-image :src="album.album.images[0].url" class="album-image"/>
                <hr>
            </template>
        </template>
    </QTracks>
</template>

<script>
    export default {
        components: {
            QTracks: () => import('../Queries/QTrack.vue')
        }
    }
</script>

<style scoped>

</style>
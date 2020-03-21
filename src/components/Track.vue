<template>
    <QTracks v-slot="{ tracks: getTracks }">
        <h3>Featured Tracks</h3>
        <template v-for="track in getTracks">
            <strong>{{track.name}}</strong>
            <p>Artist: {{track.trackInfo.album.artists[0].name}}
            <br />Album: {{track.trackInfo.album.name}}</p>
            <g-image :src="track.trackInfo.album.images[0].url" class="album-image"/>
            <hr>
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
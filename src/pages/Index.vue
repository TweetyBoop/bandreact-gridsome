<template>
    <Layout>
        <h1>Hello, world of music enthusiasts!</h1>

        <div class="mainComponentContainer">
            <Tracks/>
            <Genres/>
            <Artists/>
        </div>

    </Layout>
</template>

<script>
    import Tracks from '~/components/Track.vue'
    import Genres from '~/components/Genre.vue'
    import Artists from '~/components/Artist.vue'

    export default {
        metaInfo: {
            meta: [
                {name: 'author', content: 'Tanya Lamontagne'}
            ]
        },
        components: {
            Tracks,
            Genres,
            Artists
        }

    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    .mainComponentContainer {

    }
</style>

<template>
    <Layout>
        <h1>Hello, world of music enthusiasts!</h1>

        <div class="mainComponentContainer">
            <SearchBarAddToStrapi/>
            <Tracks/>
            <Genres/>
            <Artists/>
        </div>

    </Layout>
</template>

<script>
    import SearchBarAddToStrapi from '~/components/SearchBarAddToStrapi.vue'
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
            SearchBarAddToStrapi,
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

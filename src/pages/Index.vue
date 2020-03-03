<template>
    <Layout>
        <h1>Hello, world of music enthusiasts!</h1>

        <Genres/>
        <Artists/>

    </Layout>
</template>

<script>
    import Genres from '~/components/Genre.vue'
    import Artists from '~/components/Artist.vue'

    export default {
        metaInfo: {
            meta: [
                {name: 'author', content: 'Tanya Lamontagne'}
            ]
        },
        components: {
            Genres,
            Artists
        }
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }
</style>

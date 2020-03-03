// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
    api.loadSource(async actions => {
        const genreCollection = actions.addCollection('Genres')
        const { data } = await axios.get('http://localhost:1337/genres')
        for (const genre of data) {
            genreCollection.addNode({
                id: genre.id,
                name: genre.Name,
                artists: genre.artists
            })
        }
    })

    api.loadSource(async actions => {
        const artistCollection = actions.addCollection('Artists')
        const { data } = await axios.get('http://localhost:1337/artists')
        for (const artist of data) {
            artistCollection.addNode({
                id: artist.id,
                name: artist.Name
            })
        }
    })

    api.createManagedPages(async ({ createPage }) => {
        const { data } = await axios.get('http://localhost:1337/artists')

        data.forEach(item => {
            createPage({
                path: `/artists/${item.id}`,
                component: './src/templates/Artists/Artists.vue',
                context: {
                    artist: item
                }
            })
        })
    })
}

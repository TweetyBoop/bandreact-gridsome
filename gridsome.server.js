// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const SpotifyWebApi = require('spotify-web-api-node')


module.exports = function (api) {
    // Track collection for Components
    api.loadSource(async actions => {
        const trackCollection = actions.addCollection('Tracks')
        const { data } = await axios.get('http://localhost:1337/tracks')
        for (const track of data) {
            trackCollection.addNode({
                id: track.id,
                name: track.trackName,
                trackInfo: track.trackInfo
            })
        }
    })

    // Genre collection for Components
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

    // Artist collection for Components
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

    // Artist Collection for artist page
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

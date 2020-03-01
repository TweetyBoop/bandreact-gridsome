// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
    api.loadSource(async actions => {
        const { data } = await axios.get('http://localhost:1337/artists')

        const collection = actions.addCollection({
            typeName: 'Artists'
        })

        for (const artist of data) {
            collection.addNode({
                id: artist.id,
                name: artist.name,
                description: artist.description
            })
        }
    })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}

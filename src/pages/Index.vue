<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>{{ $page.strapiArtists.edges.node }}</p>

    <div v-for="edge in $page.strapiArtists.edges" :key="edge.node.id">
      <p v-html="edge.node.Name"></p>
    </div>

    <p>
      <!--Name: {{$page.strapiArtists.name}} <br/>-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
      title: 'Band React',
      meta: [
          { name: 'author', content: 'Tanya Lamontagne' }
      ]
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
  query Artists ($page: Int) {
    strapiArtists: allStrapiArtists (perPage: 2, page: $page) @paginate {
      edges {
        node {
          Name
          Description
          Logo {id}
        }
      }
    }
  }
</page-query>
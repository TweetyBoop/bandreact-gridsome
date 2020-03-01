<template>
    <Layout>
        <h1>{{ $context.artist.Name }}</h1>
        <div v-html="$context.artist.Description"></div>
        <g-image v-bind:src="'http://localhost:1337'+$context.artist.Logo.url" />
    </Layout>
</template>
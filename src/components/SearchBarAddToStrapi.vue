<template>
    <div class="SearchBarDiv">
        <input id="SearchBarInput" v-model="searchBar" placeholder="Search Spotify..." @keyup.enter="SearchSpotify"/>
        <button @click="SearchSpotify">Search</button>
        <div>
            <ul style="list-style:none;padding-left:0px;">
                <template v-for="(block, index) in tracks" :item="item" :index="index">
                    <li class="SearchResultListItems" @click="addSongToRepertoire(tracks[index])">
                        <div class="resultItem">
                            <div class="floatLeft"><g-image :src="block.album.images[0].url" class="album-image"/></div>
                            <div class="floatRight">
                                <strong>{{block.name}}</strong>
                                <p>{{block.artists[0].name}}</p>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>

    </div>
</template>

<script>
    const axios = require('axios')
    export default {
        name: 'SearchBarAddToStrapi',
        data () {
            return {
                searchBar:'',
                tracks: {}
            }
        },
        methods: {
            SearchSpotify: function () {
                var ref = this
                var searchTrack = document.getElementById('SearchBarInput').value
                var Spotify = require('node-spotify-api');
                var spotify = new Spotify({
                    id: '87ffcf7e437244c9ad7fcbafb35191dd',
                    secret: 'cf4a0950c5cf4bc897052f4d6cb509c7'
                });

                var apiTrackFromSpotify;
                this.searchBar = ''
                spotify
                    .search({type: 'track', query: searchTrack, limit: 20})
                    .then(function (response) {
                        apiTrackFromSpotify = response.tracks.items;
                        ref.tracks = apiTrackFromSpotify
                        return ref.tracks
                    })
                    .catch(function (err) {
                        console.log("I'm here with an error:"+err);
                    });
            },
            addSongToRepertoire: function(track){
                console.log(track);
                axios.post('http://localhost:1337/tracks',{
                    trackName:track.name,
                    trackInfo:track
                })
                    .then(function (response) {
                        console.log('posted "%s" to strapi',track.name)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
    .SearchBarDiv {
        padding: 20px;
        background: #FFF;
        margin-bottom: 5px;
    }

    .SearchResultListItems {
        border: 1px solid darkgray;
        cursor: pointer;
    }

    .album-image {
        width: 100px;
        height: 100px;
    }

    .resultItem {
        display: flex;
    }

    .floatLeft {
        float:left;
        margin-bottom: -5px;
    }

    .floatRight {
        float:right;
        width: 100%;
        padding: 5px 10px;
    }
</style>
<template>
    <div class="episodes-container">
      <div class="episode-box" v-for="(episode, key) in episodeList" :key="key">
        <router-link :to="`/episode/${episode.id}`">
        <h2>{{ episode?.name }}</h2>
    </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const episodeList = ref([]);
  
  fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      episodeList.value = data.results;
    });
</script>

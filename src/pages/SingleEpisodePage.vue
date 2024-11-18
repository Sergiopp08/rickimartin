<template>
  <router-link to="/">Volver</router-link>
  <h1>Personajes del Episodio</h1>
  <div class="characters-container">
    <Splide :options="{gap:20 , perPage:4, padding:{left:80, right:80}}" class="home-carrousel">
      <SplideSlide v-for="character in characterList">
        <characterBoxComponent :key="character.id" :name="character.name" :image="character.image" :species="character.species" :idcharacter="character.id" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import characterBoxComponent from './../components/characterBoxComponent.vue';
import '@splidejs/splide/dist/css/splide.min.css';

const route = useRoute();
const characterList = ref([]);

fetch(`https://rickandmortyapi.com/api/episode/${route.params.idrouter}`)
  .then((response) => response.json())
  .then((data) => {
    Promise.all(
      data.characters.map((url) =>
        fetch(url).then((response) => response.json())
      )
    ).then((characters) => {
      characterList.value = characters; // Ahora los personajes tienen su ID y demás datos.
    });
  });
</script>

<template>
    <router-link to="/">
        <button>Volver a Episodios</button>
    </router-link>

    <h2>{{ character.name }}</h2>
    <div class="character-details">
        <img :src="character.image" alt="Character Image" />
        <p><strong>Especies:</strong> {{ character.species }}</p>
        <p><strong>Género:</strong> {{ character.gender }}</p>
        <p><strong>Origen:</strong> {{ character.origin?.name }}</p>
        <p><strong>Ubicación:</strong> {{ character.location?.name }}</p>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const character = ref({});

    fetch(`https://rickandmortyapi.com/api/character/${route.params.idrouter}`)
    .then((response) => response.json())
    .then((data) => {
        character.value = data;
    });
</script>

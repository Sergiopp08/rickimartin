<template>
    <div class="character-box-item">
            <router-link :to="{ name: 'SingleCharacterPage', params: { idrouter: idcharacter }}">
            <div class="character-box-img-container">
                <img :src="image" />
            </div>
            <h3>{{ name }}</h3>
            <p><strong>Species:</strong> {{ species }}</p>
        </router-link>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: String,
        image: String,
        species: String,
        idcharacter: Number, // Este ID es el del personaje
    });
</script>

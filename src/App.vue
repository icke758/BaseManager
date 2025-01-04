<script setup lang="ts">
import { ref } from 'vue'

const types = ref(['Batalhão', 'Medicina', 'Desenvolvimento', 'Comunicação'])
</script>

<template>
  <h1>Bem vindo a base</h1>
  <ul class="list">
    <li v-for="(type, index) in types" :key="index">{{ type }}</li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  gap: 25%;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>

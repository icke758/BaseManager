<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.name)
</script>

<template>
  <h1>{{ title }}</h1>
  <ul class="list">
    <li><RouterLink to="/base">Base</RouterLink></li>
    <li><RouterLink to="/missions">Missões</RouterLink></li>
  </ul>
  <hr />
  <RouterView />
</template>

<style scoped>
.list {
  display: flex;
  gap: 80%;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: white;
}
</style>

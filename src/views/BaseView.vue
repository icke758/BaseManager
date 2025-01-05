<script setup lang="ts">
import { useMissionsStore, type MissionPresentation } from '@/stores/missions'
import { ref } from 'vue'

const missionStore = useMissionsStore()
const currentMission = ref(missionStore.getSelectedMission())

const showCurrentMission = (currentMission: MissionPresentation | null): string => {
  if (!currentMission) {
    return 'Nenhuma missão selecionada.'
  }
  return `${currentMission.title} - ${currentMission.description} - ${currentMission.timeToComplete}h`
}
const types = ref(['Batalhão', 'Medicina', 'Desenvolvimento', 'Comunicação'])
</script>

<template>
  <div>Reputação</div>
  <div>Missão Atual: {{ showCurrentMission(currentMission) }}</div>
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

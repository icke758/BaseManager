<script setup lang="ts">
import { useMissionsStore, type MissionPresentation } from '@/stores/missions'
import { useReputationStore } from '@/stores/reputation'
import { ref } from 'vue'

const missionStore = useMissionsStore()
const reputationStore = useReputationStore()

const [stateReputation = ref(0), mafiaReputation = ref(0)] = reputationStore.getReputation()

const currentMission = ref(missionStore.getSelectedMission())
const types = ref(['Batalhão', 'Medicina', 'Desenvolvimento', 'Comunicação'])

const showCurrentMission = (currentMission: MissionPresentation | null): string => {
  if (!currentMission) {
    return 'Nenhuma missão selecionada.'
  }
  return `${currentMission.title} - ${currentMission.description} - ${currentMission.timeToComplete}h`
}

const showCurrentReputation = (reputation: number): string => {
  let visibleReputation = ''
  for (let i = 0; i < reputation; i++) {
    visibleReputation += '+'
  }

  return visibleReputation
}
</script>

<template>
  <div>
    <div>Reputação:</div>
    <div>Estados {{ showCurrentReputation(stateReputation) }}</div>
    <div>Guerrilhas {{ showCurrentReputation(mafiaReputation) }}</div>
  </div>
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

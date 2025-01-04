<script setup lang="ts">
import { useMissionsStore } from '@/stores/missions'

const missionStore = useMissionsStore()
const props = defineProps<{ missionId: number | undefined }>()
const details = missionStore.getMissionDetails(props.missionId)
</script>

<template>
  <h2>Detalhes da Missão</h2>
  <p>Custo: {{ details?.cost }}</p>
  <p>Ganho de reputação: {{ details?.reputationGain }}</p>
  <p>Tempo para ser completada: {{ details?.timeToComplete }}h</p>
</template>

<style scoped></style>

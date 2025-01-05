<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMissionsStore, type MissionDetails } from '@/stores/missions'

const props = defineProps<{ missionId: number | undefined }>()
const missionDetails = ref<MissionDetails | undefined>(undefined)
const missionStore = useMissionsStore()

watch(
  () => props.missionId,
  (newMissionId) => {
    if (newMissionId !== null) {
      missionDetails.value = missionStore.getMissionDetails(newMissionId)
    } else {
      missionDetails.value = undefined
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="details-text">
    <div v-if="missionDetails">
      <h3>Detalhes da Missão</h3>
      <p>Tempo para completar: {{ missionDetails.timeToComplete }} horas</p>
      <p>Custo: {{ missionDetails.cost }}</p>
      <p>Reputação: {{ missionDetails.reputationGain }}</p>
    </div>
    <div v-else>
      <p>Essa missão não contém detalhes.</p>
    </div>
  </div>
</template>

<style scoped>
.details-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

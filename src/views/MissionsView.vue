<script setup lang="ts">
import MissionDetails from '@/components/MissionDetails.vue'
import { useMissionsStore, type Mission } from '@/stores/missions'
import { ref } from 'vue'

const missionStore = useMissionsStore()

const missionsRef = ref(missionStore.getMissions())
const showDetails = ref(false)
const selectedMissionId = ref<number | undefined>(undefined)

const chooseMission = (mission: Mission) => {
  missionStore.selectMission(mission)
}

const showMissionDetails = (missionId: number) => {
  if (selectedMissionId.value !== missionId) {
    selectedMissionId.value = missionId
    showDetails.value = true
  } else {
    showDetails.value = !showDetails.value
  }
}
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mission, index) in missionsRef" :key="index">
          <td>{{ mission.title }}</td>
          <td>{{ mission.description }}</td>
          <td>
            <button class="monospaced-button" @click="chooseMission(mission)">Selecionar</button>
          </td>
          <td>
            <button class="monospaced-button" @click="showMissionDetails(mission.id)">
              Detalhes
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="showDetails && selectedMissionId !== null">
    <MissionDetails :mission-id="selectedMissionId" />
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

table {
  border-collapse: collapse;
  width: 80%;
  max-width: 1000px;
  border: 1px solid #ddd;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

thead {
  font-weight: bold;
}

.monospaced-button {
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: var(--vt-c-black);
  color: var(--color-text);
}

.monospaced-button:hover {
  box-shadow: 4px 4px 10px rgba(163, 161, 161, 0.2);
}

.monospaced-button:active {
  box-shadow: none;
  transform: scale(0.98);
}
</style>

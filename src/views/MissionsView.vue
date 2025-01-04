<script setup lang="ts">
import MissionDetails from '@/components/MissionDetails.vue'
import { useMissionsStore, type Mission } from '@/stores/missions'
import { ref } from 'vue'

const missionStore = useMissionsStore()

const missionsRef = ref(missionStore.getMissions())
const showDetails = ref(false)
const currentMission = missionStore.getSelectedMission()

const chooseMission = (mission: Mission) => {
  missionStore.selectMission(mission)
}

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Escolher</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mission, index) in missionsRef" :key="index">
          <th scope="row">{{ mission.id }}</th>
          <td>{{ mission.title }}</td>
          <td>{{ mission.description }}</td>
          <td><button class="monospaced-button" @click="chooseMission(mission)">Choose</button></td>
          <td><button class="monospaced-button" @click="toggleDetails()">Detalhes</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="showDetails">
    <MissionDetails :mission-id="currentMission?.id" />
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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

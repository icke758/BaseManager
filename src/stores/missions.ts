import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Mission = {
  id: number
  title: string
  description: string
}

export type MissionDetails = {
  id: number
  timeToComplete: number
  cost: number
  reputationGain: number
}

export type MissionPresentation = Mission & MissionDetails

const selectedMission = ref<MissionPresentation | null>(null)
const missionDetails: Array<MissionDetails> = [
  {
    id: 1,
    timeToComplete: 2,
    cost: 100,
    reputationGain: 10,
  },
  {
    id: 2,
    timeToComplete: 10,
    cost: 150,
    reputationGain: 10,
  },
]

const missions: Array<Mission> = [
  {
    id: 1,
    title: 'Caçar o prefeito',
    description: 'Você precisa caçar ele logo!',
  },
  {
    id: 2,
    title: 'Salvar um gato de uma árvore',
    description: 'Salve o gato',
  },
  {
    id: 3,
    title: 'Capture os macacos',
    description: 'Sua missão é capturar todos os macacos',
  },
]

export const useMissionsStore = defineStore('missions', () => {
  const getMissions = (): Array<Mission> => {
    return missions
  }

  const selectMission = (mission: Mission) => {
    const details = missionDetails.find((detail) => detail.id === mission.id)
    if (details) {
      selectedMission.value = { ...mission, ...details }
    } else {
      console.warn(`No details found for mission with id: ${mission.id}`)
      selectedMission.value = null
    }
  }

  const getSelectedMission = (): MissionPresentation | null => {
    return selectedMission.value
  }

  const getMissionDetails = (id: number | undefined): MissionDetails | undefined => {
    return missionDetails.find((x) => x.id == id)
  }

  return { getMissions, selectMission, getSelectedMission, getMissionDetails }
})

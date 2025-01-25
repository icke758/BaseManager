import { defineStore } from 'pinia'

const getStateReputation = () => {
  return 10
}

const getMafiaReputation = () => {
  return 5
}

export const useReputationStore = defineStore('reputation', () => {
  const getReputation = () => {
    return [getStateReputation(), getMafiaReputation()]
  }

  return { getReputation }
})

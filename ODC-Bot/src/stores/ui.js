import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const chatOpen = ref(false)
  const messages = ref([
    { id: 1, from: 'bot', text: 'Welcome to Orange Training Assistant. I can show courses and help you register.' }
  ])

  function openChat() { chatOpen.value = true }
  function closeChat() { chatOpen.value = false }
  function toggleChat() { chatOpen.value = !chatOpen.value }

  function pushUser(text) {
    messages.value.push({ id: Date.now(), from: 'user', text })
  }
  function pushBot(text) {
    messages.value.push({ id: Date.now(), from: 'bot', text })
  }
  function clearMessages() {
    messages.value = []
  }

  return { chatOpen, openChat, closeChat, toggleChat, messages, pushUser, pushBot, clearMessages }
})

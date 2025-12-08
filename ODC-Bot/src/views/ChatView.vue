<script setup>
import { useChatStore } from '@/stores/chatStore'
const chat = useChatStore()
</script>

<template>
  <div class="pt-24 max-w-4xl mx-auto px-6">
    <h1 class="text-3xl font-bold mb-4">Chat With the Assistant</h1>

    <button
      @click="chat.openChat"
      class="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Open Chat
    </button>
  </div>
</template>
<style scoped>
    
</style>
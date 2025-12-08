<script setup>
import { useChatStore } from '@/stores/chatStore'
const chat = useChatStore()
</script>

<template>
 <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center z-50 fade-enter-active">
 
    
    <div class="bg-white w-full md:w-[420px] h-[70vh] md:h-[500px] rounded-t-2xl md:rounded-2xl shadow-2xl p-4 slide-up">
      <div class="p-4 border-b flex justify-between items-center">
        <h2 class="font-bold text-lg">ODC Chatbot</h2>
        <button @click="chat.closeChat" class="text-gray-500 hover:text-black text-xl">&times;</button>
      </div>

      <div class="flex-1 p-4 overflow-y-auto text-gray-700">
        <p class="text-sm">👋 Hello! How can I assist you today?</p>
      </div>

      <div class="p-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
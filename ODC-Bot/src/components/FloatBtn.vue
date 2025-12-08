<script setup>
import { useChatStore } from '@/stores/chatStore'
const chat = useChatStore()
</script>

<template>
  <button
  @click="toggleChat"
  class="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 animate-bounce"
>
  💬
</button>

</template>
<style scoped>
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
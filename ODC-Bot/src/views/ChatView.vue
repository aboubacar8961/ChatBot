<!-- <script setup>
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
    
</style> -->

<template>
  <section class="space-y-6">
    <div class="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Full-screen Chat</h1>
        <p class="text-sm text-neutral-500">Use the Assistant to explore courses and registration tips.</p>
      </div>

      <div class="flex items-center gap-2">
        <button @click="ui.openChat" class="btn-primary">Open Assistant</button>
        <button @click="ui.clearMessages" class="px-4 py-2 rounded-md border">Clear</button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-xl shadow-sm">
        <div class="text-sm text-neutral-600">This is a UI demo. The interactive Assistant is available via the floating bubble above or the "Open Assistant" button.</div>
      </div>

      <div class="bg-white p-4 rounded-xl shadow-sm">
        <div class="text-sm font-medium">Developer notes</div>
        <div class="mt-3 text-sm text-neutral-600">
          Connect <code>ui.messages</code> in <code>src/stores/ui.js</code> to your messaging backend and replace simulated responses in <code>ChatModal.vue</code>.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUIStore } from '@/stores/ui'
const ui = useUIStore()
</script>

<style scoped>
</style>

<template>
  <div class="fixed right-6 bottom-6 z-50">
    <button @click="ui.toggleChat" class="group relative w-16 h-16 rounded-full shadow-soft-lg flex items-center justify-center bg-white ring-1 ring-neutral-200 hover:scale-105 transform transition">
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" :style="{ color: 'var(--brand-orange)' }">
        <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="absolute -top-1 -right-1 bg-brand-orange text-white rounded-full px-2 py-0.5 text-xs font-semibold animate-pulse">Ask</div>
    </button>
  </div>
</template>

<script setup>
import { useUIStore } from '@/stores/ui'
const ui = useUIStore()
</script>

<style scoped>
</style>

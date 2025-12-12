<!-- <template>
  <nav class="bg-white shadow-sm py-4 sticky top-0 z-40">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
      <h1 class="font-bold text-xl">ODC Virtual Assistant</h1>

      <ul class="flex gap-6 text-gray-700">
        <RouterLink to="/" class="hover:text-black">Home</RouterLink>
        <RouterLink to="/courses" class="hover:text-black">Courses</RouterLink>
        <RouterLink to="/about" class="hover:text-black">About</RouterLink>
        <RouterLink to="/chat" class="hover:text-black">Chat</RouterLink>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script> -->

<template>
  <nav class="bg-white border-b sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-11 h-11 flex items-center justify-center rounded-md bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white font-bold">OG</div>
            <div>
              <div class="font-semibold text-black">Orange Training</div>
              <div class="text-xs text-neutral-500">Learning Assistant</div>
            </div>
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="text-sm text-neutral-700 hover:text-black">Home</router-link>
          <router-link to="/courses" class="text-sm text-neutral-700 hover:text-black">Courses</router-link>
          <router-link to="/about" class="text-sm text-neutral-700 hover:text-black">About</router-link>
          <router-link to="/chat" class="text-sm text-neutral-700 hover:text-black">Chat</router-link>
        </div>

        <div class="flex items-center gap-3">
          <button @click="openChat" class="btn-primary hidden sm:inline-flex">Open Assistant</button>

          <button @click="mobileMenu = !mobileMenu" class="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileMenu" class="md:hidden border-t bg-white">
      <div class="px-4 py-3 space-y-2">
        <router-link @click="mobileMenu = false" to="/" class="block">Home</router-link>
        <router-link @click="mobileMenu = false" to="/courses" class="block">Courses</router-link>
        <router-link @click="mobileMenu = false" to="/about" class="block">About</router-link>
        <router-link @click="mobileMenu = false" to="/chat" class="block">Chat</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useUIStore } from '@/stores/ui'
const mobileMenu = ref(false)
const ui = useUIStore()
function openChat(){ ui.openChat() }
</script>

<style scoped>
/* small local adjustments */
</style>

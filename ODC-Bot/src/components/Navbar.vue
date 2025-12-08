<template>
  <nav class="bg-white shadow-sm py-4 sticky top-0 z-40">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
      <h1 class="font-bold text-xl">ODC Assistant</h1>

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
</script>
<template>
  <div class="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-soft-lg transition">
    <div class="p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-semibold text-neutral-900">{{ course.title }}</h3>
          <p class="text-sm text-neutral-500 mt-1">{{ course.short }}</p>
        </div>
        <div class="text-xs text-neutral-400">{{ course.level }}</div>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-neutral-600">Duration: <span class="font-medium">{{ course.duration }}</span></div>
        <button @click="$emit('view', course)" class="px-3 py-1 rounded-md bg-brand-orange text-white text-sm hover:bg-brand-orange-dark">View</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: { type: Object, required: true }
})
</script>

<style scoped>
</style>

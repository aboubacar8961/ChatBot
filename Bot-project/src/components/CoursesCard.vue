<template>
  <div class="border rounded-lg p-4 hover:shadow-lg transition">
    <div class="flex items-center justify-between">
      <h4 class="font-semibold text-lg text-gray-900">{{ course.title }}</h4>
      <span class="text-xs px-2 py-1 rounded-full border text-gray-600">{{ course.level }}</span>
    </div>
    <p class="text-sm text-gray-600 mt-2">{{ course.summary }}</p>
    <div class="mt-3 text-xs text-gray-500">{{ course.duration }}</div>
  </div>
</template>

<script scooped>
export default { name: "CoursesCard", props: { course: Object } };
</script>

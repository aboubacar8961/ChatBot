<template>
  <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 slide-up">
  <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
  <p class="text-gray-600 mt-2 text-sm">{{ description }}</p>
    <h1 class="text-3xl font-bold mb-6">All Courses</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-semibold text-lg">Web Development</h3>
        <p class="text-sm text-gray-600 mt-1">Frontend & backend essentials.</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-semibold text-lg">Graphic Design</h3>
        <p class="text-sm text-gray-600 mt-1">Design stunning visuals.</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-semibold text-lg">Cybersecurity Basics</h3>
        <p class="text-sm text-gray-600 mt-1">Stay safe and protect your data.</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="font-semibold text-lg">Entrepreneurship</h3>
        <p class="text-sm text-gray-600 mt-1">Learn how to build a business.</p>
      </div>

    </div>
  </div>
</template>
<script setup>

</script>
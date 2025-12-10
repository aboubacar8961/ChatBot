<template>
  <section class="bg-gradient-to-r from-orange-50 via-white to-white py-20">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">Discover Orange Digital Center Trainings</h1>
      <p class="text-gray-600 max-w-2xl mx-auto mb-8">Free and practical digital skills training across Liberia—web dev, digital marketing, UI/UX and more. This prototype helps people explore courses and registration steps.</p>

      <div class="flex justify-center gap-4">
        <router-link to="/courses" class="px-6 py-3 bg-black text-white rounded-md shadow hover:opacity-95">Explore Courses</router-link>
        <button @click="$router.push('/chat')" class="px-6 py-3 border border-orange-500 text-orange-600 rounded-md hover:bg-orange-50">Talk to ODC Bot</button>
      </div>
    </div>
  </section>
</template>

<script scoped>
export default { name: "Hero" };
</script>

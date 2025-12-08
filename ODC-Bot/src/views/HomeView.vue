<template>
  <div class="pt-24 max-w-6xl mx-auto px-6">

    <section class="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
  <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4 slide-up">
    Meet Your ODC Learning Assistant
  </h1>
  <p class="text-gray-600 md:text-xl max-w-2xl slide-up mt-2">
    A smart AI assistant designed to help Liberian learners access better
    digital education, courses, and on-demand answers.
  </p>

  <button
    class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 slide-up"
    @click="openChat"
  >
    Start Chatting →
  </button>
</section>

    <!-- <section class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4">ODC Digital Learning Assistant</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Learn anything, anytime — with a friendly chatbot that guides your journey.
      </p>
      <button
        class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Explore Courses
      </button>
    </section> -->

    <section>
      <h2 class="text-2xl font-bold mb-4">Popular Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Web Development</h3>
          <p class="text-gray-600 text-sm">Learn HTML, CSS, JavaScript, and VueJS.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">UI/UX Design</h3>
          <p class="text-gray-600 text-sm">Master clean and modern design principles.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Digital Literacy</h3>
          <p class="text-gray-600 text-sm">Essential computer & internet skills.</p>
        </div>
      </div>
    </section>

  </div>
</template>
<script setup>
  
</script>
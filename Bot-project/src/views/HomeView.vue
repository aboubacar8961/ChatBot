<template>
  <div>
    <Hero />
    <main class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <section class="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 class="text-xl font-semibold mb-3">Quick intro</h2>
        <p class="text-gray-600 mb-4">This prototype shows how an ODC assistant could help visitors find training, centers and registration guidance.</p>

        <div class="mt-4 grid sm:grid-cols-2 gap-4">
          <div class="p-4 border rounded-lg">
            <h3 class="font-semibold">Free Trainings</h3>
            <p class="text-sm text-gray-600 mt-2">Most ODC classes are free — this is a place to list options and dates.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h3 class="font-semibold">Locations</h3>
            <p class="text-sm text-gray-600 mt-2">Add Monrovia, Gbarnga, Zwedru, etc. Replace later with official addresses.</p>
          </div>
        </div>
      </section>

      <aside class="bg-white p-6 rounded-xl shadow">
        <h3 class="font-semibold mb-3">Mini FAQ</h3>
        <ul class="text-sm text-gray-700 space-y-3">
          <li>• Trainings: Web Dev, UI/UX, Digital Marketing</li>
          <li>• How to register: Visit center or call local number</li>
          <li>• Target: Youth & students</li>
        </ul>
      </aside>
    </main>

    <!-- Floating button: visible on all pages -->
    <FloatBtn />
  </div>
</template>

<script scoped>
import Hero from "../components/Hero.vue";
import FloatBtn from "../components/FloatBtn.vue";

export default {
  name: "Home",
  components: { Hero, FloatBtn }
};
</script>

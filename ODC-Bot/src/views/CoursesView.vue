<!-- <template>
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

</script> -->

<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Courses Catalog</h1>
        <div class="text-sm text-neutral-500">All courses offered at Orange GSM Liberia training centers.</div>
      </div>

      <div class="flex items-center gap-3">
        <input v-model="q" placeholder="Search courses..." class="px-3 py-2 rounded-md border focus:outline-none" />
        <select v-model="center" class="px-3 py-2 rounded-md border">
          <option value="">All centers</option>
          <option v-for="c in centers" :key="c" :value="c">{{ c }}</option>
        </select>
        <button @click="ui.openChat" class="btn-primary">Ask Assistant</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseCard v-for="course in filtered" :key="course.id" :course="course" @view="openCourse" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCourseStore } from '@/stores/courses'
import { useUIStore } from '@/stores/ui'
import CourseCard from '@/components/CourseCard.vue'

const cs = useCourseStore()
const ui = useUIStore()
const q = ref('')
const center = ref('')

const centers = cs.centers

const filtered = computed(() => {
  let list = cs.courses
  if (center.value) list = cs.getByCenter(center.value)
  if (q.value.trim()) list = list.filter(c => (c.title + ' ' + c.short + ' ' + c.level).toLowerCase().includes(q.value.trim().toLowerCase()))
  return list
})

function openCourse(course) {
  ui.pushBot(`Course details: ${course.title} — ${course.short}. To register, reply "Register ${course.id}".`)
  ui.openChat()
}
</script>

<style scoped>
</style>

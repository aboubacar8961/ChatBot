<!-- <template>
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

<section class="min-h-screen flex items-center justify-center bg-black text-white px-8">
  <div class="max-w-4xl text-center slide-up show">
    <h1 class="text-5xl font-extrabold mb-6">
      Transform Your Skills. Transform Liberia.
    </h1>

    <p class="text-lg text-gray-300 mb-8">
      Learn digital skills, entrepreneurship, and leadership designed for Africa’s next generation.
    </p>

    <button class="bg-brand-orange px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:opacity-90 transition shadow-medium">
      Explore Courses
    </button>
  </div>
</section>

  </div>
</template>
<script setup>
  
</script> -->

<template>
  <section class="space-y-10">
    <header class="bg-white rounded-2xl p-8 shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-black">Orange Training — Digital Learning Assistant</h1>
          <p class="mt-3 text-neutral-600 max-w-xl">A visual assistant that guides learners through available training courses at Orange GSM Liberia centers. Use the chat to get recommendations, view courses, and learn how to register.</p>

          <div class="mt-6 flex items-center gap-3">
            <router-link to="/courses" class="btn-primary">Browse Courses</router-link>
            <button @click="ui.openChat" class="px-5 py-3 rounded-md border border-neutral-200 hover:bg-neutral-50">Open Assistant</button>
          </div>

          <div class="mt-4 text-sm text-neutral-500">Mobile-first, branded for Orange GSM Liberia. UI-only demo.</div>
        </div>

        <div class="flex items-center justify-center">
          <div class="w-full max-w-md">
            <div class="bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg">
              <div class="w-full h-56 rounded-lg bg-white border flex flex-col items-center justify-center gap-3">
                <div class="text-neutral-500">Visual Assistant</div>
                <div class="text-sm text-neutral-600">Chat bubble, course explorer, and quick registration flow (UI demo).</div>
                <div class="mt-2">
                  <button @click="ui.openChat" class="px-3 py-2 rounded-md bg-brand-orange text-white">Talk to Assistant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">Featured courses</h2>
        <router-link to="/courses" class="text-sm text-brand-orange hover:underline">See all courses →</router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseCard v-for="c in featured" :key="c.id" :course="c" @view="viewCourse" />
      </div>
    </section>
  </section>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue'
import { useCourseStore } from '@/stores/courses'
import { useUIStore } from '@/stores/ui'
const cs = useCourseStore()
const ui = useUIStore()

const featured = cs.courses.slice(0,3)

function viewCourse(course) {
  ui.pushBot(`You opened "${course.title}". To register, say "Register ${course.id}" or visit the ${course.center}.`)
  ui.openChat()
}
</script>

<style scoped>
</style>

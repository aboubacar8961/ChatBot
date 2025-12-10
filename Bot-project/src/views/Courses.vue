<script>
import CoursesCard from "../components/CoursesCard.vue";
import { useOdcStore } from "../store/odcStore";

export default {
  components: { CoursesCard },
  setup() {
    const store = useOdcStore();
    return { courses: store.courses };
  }
};
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h2 class="text-2xl font-semibold mb-6">Available Courses</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <CourseCard v-for="c in courses" :key="c.id" :course="c" />
    </div>
  </div>
</template>



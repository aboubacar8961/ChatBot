import { defineStore } from "pinia";
import { ref } from "vue";

export const useOdcStore = defineStore("odc", () => {
  const courses = ref([
    { id: 1, title: "Basic Computer Literacy", level: "Beginner", summary: "Files, email, MS Office basics", duration: "4 weeks" },
    { id: 2, title: "Web Development (HTML/CSS/JS)", level: "Beginner", summary: "Intro to web building", duration: "8 weeks" },
    { id: 3, title: "Digital Marketing", level: "Beginner", summary: "Social media & content strategy", duration: "6 weeks" }
  ]);
  return { courses };
});

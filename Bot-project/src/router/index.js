import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import FAQ from "../components/FAQItem.vue";
import Chat from "../views/Chat.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/courses", component: Courses },
  { path: "/faq", component: FAQ },
  { path: "/chat", component: Chat }
];

export default createRouter({ history: createWebHistory(), routes });

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCourseStore = defineStore('courses', () => {
  const courses = ref([
    {
      id: 'c1',
      title: 'Mobile Customer Service Essentials',
      short: 'Customer care fundamentals for GSM agents',
      level: 'Beginner',
      duration: '3 weeks',
      center: 'Monrovia Training Center',
      seats: 20
    },
    {
      id: 'c2',
      title: 'SIM & Network Provisioning',
      short: 'Learn SIM activation, troubleshooting & provisioning',
      level: 'Intermediate',
      duration: '4 weeks',
      center: 'Paynesville Training Hub',
      seats: 12
    },
    {
      id: 'c3',
      title: 'Retail Sales & Upselling Skills',
      short: 'Retail strategies to increase ARPU & retention',
      level: 'Beginner',
      duration: '2 weeks',
      center: 'Monrovia Training Center',
      seats: 25
    },
    {
      id: 'c4',
      title: 'Digital Marketing for SMEs',
      short: 'Social media, SMS campaigns and customer funnels',
      level: 'Advanced',
      duration: '5 weeks',
      center: 'Benson Street Center',
      seats: 15
    },
    {
      id: 'c5',
      title: 'Electricity & Network Site Safety',
      short: 'Safety standards for field technicians',
      level: 'Intermediate',
      duration: '3 weeks',
      center: 'Paynesville Training Hub',
      seats: 10
    }
  ])

  const centers = computed(() => {
    const set = new Set(courses.value.map(c => c.center))
    return Array.from(set)
  })

  function getByCenter(centerName) {
    return courses.value.filter(c => c.center === centerName)
  }

  function search(term = '') {
    const q = term.trim().toLowerCase()
    if (!q) return courses.value
    return courses.value.filter(c => (c.title + ' ' + c.short + ' ' + c.level).toLowerCase().includes(q))
  }

  return { courses, centers, getByCenter, search }
})

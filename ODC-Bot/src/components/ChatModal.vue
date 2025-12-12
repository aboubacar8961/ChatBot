<!-- <script setup>
import { useChatStore } from '@/stores/chatStore'
const chat = useChatStore()
</script>

<template>
 <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center z-50 fade-enter-active">
 
    
    <div class="bg-white w-full md:w-[420px] h-[70vh] md:h-[500px] rounded-t-2xl md:rounded-2xl shadow-2xl p-4 slide-up">
      <div class="p-4 border-b flex justify-between items-center">
        <h2 class="font-bold text-lg">ODC Chatbot</h2>
        <button @click="chat.closeChat" class="text-gray-500 hover:text-black text-xl">&times;</button>
      </div>

      <div class="flex-1 p-4 overflow-y-auto text-gray-700">
        <p class="text-sm">👋 Hello! How can I assist you today?</p>
      </div>

      <div class="p-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          class="w-full border rounded-lg px-3 py-2"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>

</style> -->

<template>
  <transition name="slide-fade">
    <div v-if="ui.chatOpen" class="fixed inset-0 z-60 flex items-end md:items-center justify-end md:justify-center p-4">
      <div class="absolute inset-0 bg-black/40" @click="ui.closeChat"></div>

      <div class="relative w-full max-w-lg md:max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
        <header class="px-5 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold">OG</div>
            <div>
              <div class="font-semibold">Orange Training Assistant</div>
              <div class="text-xs opacity-80">Visual assistant & course guide</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button @click="clear" class="px-3 py-1 rounded-md bg-white/20 text-white text-sm">Clear</button>
            <button @click="ui.closeChat" class="p-1 rounded-md hover:bg-white/10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
          <!-- left: messages -->
          <div class="md:col-span-2 flex flex-col h-96">
            <div class="flex-1 overflow-auto p-4 space-y-3 bg-slate-50">
              <div v-for="m in ui.messages" :key="m.id" class="flex" :class="m.from==='bot' ? 'justify-start' : 'justify-end'">
                <div v-if="m.from==='bot'" class="bg-white border px-3 py-2 rounded-xl max-w-[80%] shadow">
                  <div class="text-sm text-neutral-800" v-html="formatMessage(m.text)"></div>
                </div>
                <div v-else class="bg-brand-orange text-white px-3 py-2 rounded-xl max-w-[80%] shadow">
                  <div class="text-sm">{{ m.text }}</div>
                </div>
              </div>
            </div>

            <!-- composer -->
            <form @submit.prevent="send" class="p-4 border-t bg-white flex items-center gap-3">
              <input v-model="input" placeholder="Ask about courses, centers, or schedules..." class="flex-1 px-3 py-2 rounded-md border focus:outline-none" />
              <button type="submit" class="btn-primary">Send</button>
            </form>
          </div>

          <!-- right: quick actions / center & courses -->
          <aside class="md:col-span-1 border-l p-4 bg-neutral-50 h-96 overflow-auto">
            <div>
              <h4 class="font-semibold text-sm mb-2">Training Centers</h4>
              <ul class="space-y-2">
                <li v-for="c in centers" :key="c" class="text-sm">
                  <button @click="showCenter(c)" class="w-full text-left px-3 py-2 rounded-md hover:bg-white/60">{{ c }}</button>
                </li>
              </ul>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm mb-2">Quick intents</h4>
              <div class="flex flex-col gap-2">
                <button @click="suggest('What courses are available?')" class="px-3 py-2 rounded-md bg-white text-sm">List courses</button>
                <button @click="suggest('How do I register?')" class="px-3 py-2 rounded-md bg-white text-sm">Register</button>
                <button @click="suggest('Show courses at Monrovia Training Center')" class="px-3 py-2 rounded-md bg-white text-sm">Monrovia center</button>
              </div>
            </div>

            <div class="mt-4 text-xs text-neutral-500">
              Visual demo only. Connect a backend to make chat real.
            </div>
          </aside>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useUIStore } from '@/stores/ui'
import { useCourseStore } from '@/stores/courses'

const ui = useUIStore()
const cs = useCourseStore()

const input = ref('')

function send() {
  const text = input.value.trim()
  if (!text) return
  ui.pushUser(text)
  input.value = ''

  // Basic simulated assistant logic to demonstrate helpful responses (UI-only)
  setTimeout(() => {
    const lower = text.toLowerCase()
    if (lower.includes('courses') || lower.includes('list')) {
      const list = cs.courses.map(c => `• ${c.title} — ${c.center} (${c.duration})`).join('<br/>')
      ui.pushBot(`Here are available courses:<br/>${list}`)
    } else if (lower.includes('register')) {
      ui.pushBot('To register, visit the nearest training center or text "REGISTER <course-id>" to 12345. (Simulated)')
    } else if (lower.includes('monrovia')) {
      const mon = cs.getByCenter('Monrovia Training Center')
      if (mon.length) {
        const list = mon.map(c => `• ${c.title} — ${c.duration}`).join('<br/>')
        ui.pushBot(`Courses at Monrovia Training Center:<br/>${list}`)
      } else {
        ui.pushBot('No courses found for Monrovia Training Center.')
      }
    } else {
      ui.pushBot(`I understood: "${text}". Try asking "List courses" or "Show courses at Paynesville".`)
    }
  }, 700)
}

function suggest(text) {
  input.value = text
  send()
}

function showCenter(center) {
  const arr = cs.getByCenter(center)
  const list = arr.map(c => `• ${c.title} (${c.duration})`).join('<br/>')
  ui.pushBot(`Courses at ${center}:<br/>${list}`)
}

function clear() {
  ui.clearMessages()
  ui.pushBot('Welcome to Orange Training Assistant. I can show courses and help you register.')
}

function formatMessage(s) {
  // this keeps simple <br/> formatting; real markdown/render library recommended later
  return s
}
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active { transition: all .18s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateY(10px) scale(.98); }
.slide-fade-leave-to { opacity: 0; transform: translateY(10px) scale(.98); }
</style>

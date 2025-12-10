<template>
  <div>
    <button
      @click="open = true"
      class="fixed bottom-6 right-6 bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition z-50"
      aria-label="Open chat"
      title="Open chat"
    >
      💬
    </button>

    <!-- Modal / Chat box -->
    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
        <!-- backdrop -->
        <div class="absolute inset-0 bg-black/40" @click="open = false"></div>

        <div class="pointer-events-auto w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden transform transition">
          <div class="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <div class="text-sm font-semibold text-orange-600">ODC Chatbot</div>
              <div class="text-xs text-gray-500">Prototype assistant</div>
            </div>
            <button @click="open = false" class="text-gray-500">✕</button>
          </div>

          <div class="p-4 h-64 overflow-auto bg-gray-50">
            <div class="text-sm text-gray-600">Hi! I can help you find courses and centers. </div>
            <div class="mt-3 space-y-2">
              <div class="text-sm"><strong>You:</strong> Hi</div>
              <div class="text-sm text-gray-600"><strong>Bot:</strong> Hi there! Try "Courses" or "Locations".</div>
            </div>
          </div>

          <div class="p-3 border-t">
            <div class="flex gap-2">
              <input v-model="input" placeholder="Type (no backend)" class="flex-1 px-3 py-2 border rounded-md" />
              <button @click="send" class="px-3 py-2 bg-orange-500 text-white rounded-md">Send</button>
            </div>
            <div class="mt-2 text-xs text-gray-400">This is visual-only for the demo.</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FloatBtn",
  data() {
    return { open: false, input: "" };
  },
  methods: {
    send() {
      // no real functionality — just keeping it visual.
      this.input = "";
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease, transform .18s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-enter-to { opacity: 1; transform: translateY(0); }
.fade-leave-from { opacity: 1; transform: translateY(0); }
.fade-leave-to { opacity: 0; transform: translateY(8px); }
</style>

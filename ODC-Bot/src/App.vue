<!-- <script setup>
import Navbar from '@/components/Navbar.vue'
import FloatBtn from '@/components/FloatBtn.vue'
import ChatModal from '@/components/ChatModal.vue'
</script>

<template>
  <Navbar />
  
  <RouterView />

  <!-- Floating Chat -->
  <FloatBtn />

  <!-- Modal -->
  <!-- <ChatModal />
/template>
<style scoped>

</style> --
 -->


 <template>
  <div class="min-h-screen flex flex-col bg-neutral-50">
    <Navbar />

    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <Footer />

    <!-- Chat bubble & modal components available on all pages -->
    <ChatBubble />
    <ChatModal />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ChatBubble from '@/components/ChatBubble.vue'
import ChatModal from '@/components/ChatModal.vue'
</script>

<style>
/* nothing additional; Tailwind handles layout */
</style>

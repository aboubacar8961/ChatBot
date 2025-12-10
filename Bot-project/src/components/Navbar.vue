<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">ODC</div>
          <div>
            <div class="text-lg font-semibold text-gray-900">ODC Chatbot</div>
            <div class="text-xs text-gray-500">Prototype</div>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <router-link to="/" class="hover:text-orange-500">Home</router-link>
          <router-link to="/courses" class="hover:text-orange-500">Courses</router-link>
          <router-link to="/faq" class="hover:text-orange-500">FAQ</router-link>
          <router-link to="/chat" class="px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">Open Chat</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script scooped>
export default { name: "Navbar" };
</script>

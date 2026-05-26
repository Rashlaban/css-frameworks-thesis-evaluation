<template>
  <!-- Stateful header navigation showing Tailwind responsive burger toggles and dynamic active styles -->
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <span class="font-bold text-gray-800 text-lg">AdminPanel X</span>
          </div>
          <!-- Desktop Horizontal Menu -->
          <div class="hidden md:flex md:space-x-8 md:ml-10 items-center">
            <button
              v-for="item in menuItems"
              :key="item"
              @click="activeTab = item"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors"
              :class="activeTab === item ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:text-gray-900'"
            >
              {{ item }}
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <button type="button" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">
            Create New
          </button>
        </div>
        <!-- Mobile Menu Toggler Toggle Action -->
        <div class="flex items-center md:hidden">
          <button 
            type="button" 
            @click="isOpen = !isOpen"
            class="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Conditional Mobile Dropdown Menu Drawer -->
    <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button
          v-for="item in menuItems"
          :key="item"
          @click="activeTab = item; isOpen = false"
          class="block w-full text-left px-3 py-2 text-base font-medium rounded-md"
          :class="activeTab === item ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'"
        >
          {{ item }}
        </button>
        <div class="pt-2 px-3">
          <button type="button" class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium">
            Create New
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const activeTab = ref('Dashboard');

const menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];
</script>

<template>
  <!-- Stateful top-bar navigation template showing Foundation's responsive menu components and classes -->
  <nav class="top-bar-container">
    <!-- Mobile Title Bar -->
    <div class="title-bar" style="display: flex; justify-content: space-between; padding: 0.5rem;">
      <span class="title-bar-title font-bold text-white">AdminPanel X</span>
      <button 
        class="menu-icon dark border-0 bg-transparent" 
        type="button" 
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      ></button>
    </div>
    <!-- Responsive Menu Area -->
    <div class="top-bar" :class="{ 'show-menu': isOpen }" :style="{ display: isOpen ? 'block' : 'none' }">
      <div class="top-bar-left">
        <ul class="menu vertical medium-horizontal">
          <li class="menu-text hide-for-small-only">AdminPanel X</li>
          <li v-for="item in menuItems" :key="item" :class="{ active: activeTab === item }">
            <button
              @click="activeTab = item; isOpen = false"
              class="button clear margin-0"
            >
              {{ item }}
            </button>
          </li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu vertical medium-horizontal">
          <li>
            <button type="button" class="button">
              Create New
            </button>
          </li>
        </ul>
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

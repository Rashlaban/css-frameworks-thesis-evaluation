<template>
  <!-- Stateful header navigation showing Bootstrap 5 navbar components and active styles -->
  <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <span class="navbar-brand fw-bold">AdminPanel X</span>
      <!-- Mobile Hamburger Trigger -->
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Responsive Menu Collapse Container -->
      <div class="collapse navbar-collapse" :class="{ show: isOpen }">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-for="item in menuItems" :key="item" class="nav-item">
            <button
              @click="activeTab = item; isOpen = false"
              class="nav-link border-0 bg-transparent"
              :class="{ active: activeTab === item, 'fw-semibold text-primary': activeTab === item, 'text-secondary': activeTab !== item }"
            >
              {{ item }}
            </button>
          </li>
        </ul>
        <div class="d-flex">
          <button type="button" class="btn btn-primary">
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

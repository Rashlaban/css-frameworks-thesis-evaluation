<template>
  <!-- Stateful navbar template showing Bulma responsive burger toggles and classes -->
  <nav class="navbar is-white border-bottom" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item font-weight-bold">AdminPanel X</span>
      <!-- Bulma Burger mobile menu button toggler -->
      <button
        @click="isOpen = !isOpen"
        class="navbar-burger burger border-0 bg-transparent"
        :class="{ 'is-active': isOpen }"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <!-- Stateful responsive navbar-menu drawer -->
    <div class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <button
          v-for="item in menuItems"
          :key="item"
          @click="activeTab = item; isOpen = false"
          class="navbar-item border-0 bg-transparent text-left"
          :class="{ 'is-active': activeTab === item, 'has-text-primary': activeTab === item, 'has-text-grey': activeTab !== item }"
        >
          {{ item }}
        </button>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button type="button" class="button is-primary">
              Create New
            </button>
          </div>
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

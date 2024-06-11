<script setup>

import { ref } from 'vue';
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

const currentTheme = ref('Light');
const themes = ref([
    'Light',
    'Dark'
]);

const currentFont = ref('Roboto');
const fonts = ref([
  'Roboto',
  'Sans-Serif'
])


</script>

<template>
  <div class="home">
    <h2>Settings</h2>

    <div class="settings">

      <div class="setting-theme">
        <p>Theme:</p>
        <Dropdown
          placeholder="Select Theme"
          v-model="currentTheme"
          :options="themes"
          class="w-full md:w-14rem"
        />
      </div>

      <div class="setting-font">
        <p>Font Family:</p>
        <Dropdown
            placeholder="Select Font"
            v-model="currentFont"
            :options="fonts"
            class="w-full md:w-14rem"
        />
      </div>

      <div class="setting-buttons">
        <Button type="button" label="Save" />
        <Button type="button" label="Clear" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 42px;
  color: black;
  border-top-left-radius: 100px;
  background: #EEEEEE;
}

.settings {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.setting-theme, .setting-font {
  display: flex;
  gap: 12px;
  align-items: center;
}

.setting-buttons {
  display: flex;
  gap: 24px;
}

.setting-buttons > button {
  padding: 4px 12px;
}



</style>
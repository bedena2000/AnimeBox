<script setup>

import { ref } from 'vue';
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import { useAnimeStore } from "@/store/index.js";
const store = useAnimeStore();
const currentTheme = ref(store.theme);
const themes = ref([
    'Light',
    'Dark'
]);

const currentFont = ref(store.font);
const fonts = ref([
  'Roboto',
  'Sans-Serif'
]);

const saveChanges = () => {
  const result = {
    theme: currentTheme,
    font: currentFont
  };
  store.updateSettings(result);
}

const saveSettings = () => {
  store.updateSettings({
    theme: currentTheme.value,
    font: currentFont.value,
  });
};

const handleSelectThemeChange = (event) => {
  const selectedItem = event.target.value;
  currentTheme.value = selectedItem;
}

const handleSelectedFont = (event) => {
  const selectedItem = event.target.value;
  currentFont.value = selectedItem;
}


</script>

<template>
  <div class="home"
       :style="{ background: store.theme === 'Light' ? '#EEEEEE' : 'black', color: store.theme === 'Light' ? 'black' : 'white'}"
  >
    <h2>Settings</h2>

    <div class="settings">

      <div v-if="store.theme && store.font" class="setting-theme">
        <p>Theme:</p>
        <select :value="currentTheme" @change="handleSelectThemeChange"  name="theme" id="theme">
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      <div class="setting-font">
        <p>Font Family:</p>
        <select :value="currentFont" @change="handleSelectedFont"  name="font" id="font">
          <option value="Roboto">Roboto</option>
          <option value="SansSerif">SansSerif</option>
        </select>
      </div>

      <div class="setting-buttons">
        <Button @click.prevent="saveSettings" type="button" label="Save" />
        <Button  type="button" label="Clear" />
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
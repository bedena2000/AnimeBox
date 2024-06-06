<script setup>
  import Helpers from "@/helpers/index.js";

  const props = defineProps({
    isOpen: Boolean
  });


</script>

<template>
  <header class="header">
    <div>

    </div>

    <div>

    </div>

    <div class="icons-list">
      <div @click="$emit('expandMenu')"  class="icon-item">
        <img src="/icons/Huge-icon-5.png" alt="expand menu">
      </div>
      <router-link :to="iconItem.pathName"  class="icon-item" v-for="iconItem in Helpers.headerList" :key="iconItem.id">
        <p v-if="props.isOpen" class="icon-name">
          {{ iconItem.name }}
        </p>
        <img class="icon-image" :src="iconItem.icon" :alt="iconItem.name">
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  transition: all 0.5s ease;
  background: #100101;
  padding: 10px;
}

.icons-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
}

.icon-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 12px 12px;
  gap: 12px;
}

.icon-item:hover {
  background: rosybrown;
}

.icon-image {
  width: 40px;
  height: 40px;
}

.icon-name {
  color: white;
  font-family: "Anonymous Pro";
  font-weight: bold;
}




</style>
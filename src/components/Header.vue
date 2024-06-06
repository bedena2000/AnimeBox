<script setup>
  import Helpers from "@/helpers/index.js";
  console.log(Helpers.headerList);
</script>

<template>
  <header class="header">
    <div>

    </div>

    <div>

    </div>

    <div class="icons-list">
      <div class="icon-item" v-for="iconItem in Helpers.headerList">
        <span class="icon-tooltip">
          {{ iconItem.name }}
        </span>
        <img :src="iconItem.icon" :alt="iconItem.name">
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  transition: all 0.5s ease;
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
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  padding-top: 12px;
  padding-bottom: 12px;
}

.icon-item:hover {
  background: rosybrown;
}

.icon-item:hover .icon-tooltip {
  visibility: visible;
  opacity: 1;
}

.icon-tooltip {
  visibility: hidden;
  position: absolute;
  left: 40px;
  z-index: 1;
  width: 100px;
  color: white;
  font-size: 12px;
  opacity: 0;
  text-align: center;
  font-weight: bold;
  transition: all 6s ease;
  background: #192733;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
}



</style>
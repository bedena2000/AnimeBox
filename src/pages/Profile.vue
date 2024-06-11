<script setup>
</script>

<template>
  <div class="home">
    <RouterView />
    <p class="authentication ">
      Authentication will be added soon
    </p>
  </div>
</template>

<style scoped>
.home {
  padding: 24px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEEEEE;
  border-top-left-radius: 100px;
  position: relative;
}

.authentication {
  position: absolute;
  top: 25px;
  font-weight: bold;
}
</style>
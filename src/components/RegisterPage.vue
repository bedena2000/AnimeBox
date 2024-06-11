<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

const moveToLogin = () => {
  console.log('clicked');
  router.push("/profile");
};

</script>

<template>

  <form class="login-container">

    <div class="information">
      <label for="username">username</label>
      <input required type="text" id="username">
    </div>

    <div class="information">
      <label for="password">password</label>
      <input required type="password" id="password">
    </div>

    <div class="information">
      <label for="password">password</label>
      <input required type="password" id="password">
    </div>

    <div class="buttons">
      <button type="button" class="enter-button">Register</button>
      <button @click.prevent="moveToLogin" class="register-button">Login</button>
    </div>

  </form>

</template>

<style>

.login-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 10px dotted black;
  padding: 42px;
}

.information {
  display: flex;
  gap: 12px;
  align-items: center;
}

.information > label {
  font-size: 18px;
  text-transform: uppercase;
}

.information > input {
  outline: none;
  border: 2px solid black;
  padding: 6px 12px;
  color: black;
  font-weight: bold;
  border-radius: 6px;
}

.buttons {
  display: flex;
  gap: 12px;
  margin-top: 12px;

}

.enter-button, .register-button{
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
}


</style>
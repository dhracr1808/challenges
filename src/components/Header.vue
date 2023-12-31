<template>
  <div class="content-header">
    <header class="header"></header>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  width: 100%;
  height: max-content;
  max-height: 300px;
  background: url("../assets/img/bg-cafe.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  aspect-ratio: 16/9;
  position: relative;
  top: 0;
  left: 0;
}
.content-header {
  position: relative;
  padding: 0.01rem;
  height: max-content;
}

@media screen and (min-width: 400px) {
  .header {
    position: absolute;
  }
}
</style>

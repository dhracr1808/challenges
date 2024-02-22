<template>
  <div class="home">
    <div class="container">
      <div class="container--image"></div>
      <div class="container--mini">
        <div class="" style="display: flex; gap: 0.3rem">
          <div class="mini"></div>
          <div class="mini"></div>
        </div>
      </div>
      <div class="container--content">
        <div class="content">
          <div style="background-color: purple">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              velit quos dolorum accusantium impedit fugiat quidem voluptate
              quis, necessitatibus, ex eaque quae praesentium laudantium nostrum
              eveniet porro quasi! Quisquam, quam?
            </p>
          </div>
          <button class="btn-compra">Agragar a carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  min-height: 100vh;
}
.container {
  background-color: yellow;
  display: grid;
  grid-template-rows: 40vh max-content 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;
}
.container--image {
  background-color: yellowgreen;
}
.container--mini {
  background-color: rebeccapurple;
  padding-block: 0.5rem;
}
.mini {
  background-color: violet;
  height: 100px;
  width: 150px;
  border-radius: 10px;
}
.container--content {
  background-color: orange;
  padding: 0.5rem;
}
.content {
  display: grid;
  grid-template-rows: 1fr 40px;
  height: 100%;
  background-color: blueviolet;
  gap: 0.5rem;
}
.content p {
  background-color: lawngreen;
}
.btn-compra {
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border-radius: 10px;
}
</style>

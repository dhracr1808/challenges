<template>
  <article class="coffe">
    <div class="coffe_header">
      <span v-if="product.popular">Popular</span>
      <img :src="product.image" :alt="`image-${product.name}`" />
    </div>
    <div class="coffe_detail">
      <div class="coffe_detail_top">
        <h3>{{ product.name }}</h3>
        <p>
          {{ product.price }}
        </p>
      </div>
      <div class="coffe_detail_bottom">
        <div class="votes_container">
          <img :src="product.rating ? startIconFill : startIcon" alt="valore" />
          <span class="rating">{{ product.rating }}</span>
          <span class="votes"> ({{ product.votes }} votes) </span>
        </div>
        <p class="Sold" v-if="!product.available">Sold out</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { IProduct } from "./../interface/product";
import startIcon from "./../assets/img/Star.svg";
import startIconFill from "./../assets/img/Star_fill.svg";

defineProps<{ product: IProduct }>();
</script>

<style scoped>
.coffe {
  max-width: 260px;
  margin: 0 auto;
}
.coffe_header {
  position: relative;
  display: grid;
  place-items: center;
}
.coffe .coffe_header > span {
  position: absolute;
  color: var(--bg-color-primary);
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  background-color: #f6c768;
  padding: 4px 10px;
  border-radius: 10px;
  z-index: 5;
}
.coffe .coffe_header {
  overflow: hidden;
  border-radius: 15px;
}
.coffe img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: transform 1s ease;
}
.coffe .coffe_header img:hover {
  transform: scale(1.2);
}
.coffe .coffe_detail {
  padding: 0.7rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.coffe .coffe_detail .coffe_detail_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coffe .coffe_detail .coffe_detail_top h3 {
  color: var(--text-color-primary);
  font-size: var(--font-size-base);
}
.coffe .coffe_detail .coffe_detail_top p {
  color: var(--bg-color-primary);
  font-size: var(--font-size-base);
  background-color: #bee3cc;
  font-size: 0.75rem;
  padding: 4px 7px;
  font-weight: 700;
  border-radius: 5px;
}

.coffe_detail_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
}
.votes_container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.coffe_detail_bottom :where(.rating, .votes, .Sold) {
  color: var(--text-color-primary);
  font-weight: 700;
  font-size: 0.875rem;
  text-wrap: nowrap;
}
.coffe_detail_bottom .votes {
  color: var(--text-color-secondary);
  margin-left: 0.25rem;
}
.Sold {
  color: #ed735d;
}
</style>

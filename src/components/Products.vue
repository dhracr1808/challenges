<template>
  <div class="container">
    <header>
      <h1 class="title t-center">Our Collection</h1>
      <p class="description t-center">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div class="controls">
        <label>
          <input
            type="radio"
            checked
            @change="changeInput"
            hidden
            name="products"
            value="all"
          />
          <span> All Products</span>
        </label>
        <label>
          <input
            type="radio"
            @change="changeInput"
            hidden
            name="products"
            value="available"
          />
          <span> Available Now </span>
        </label>
      </div>
    </header>

    <section class="group-products">
      <ProductVue
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IProduct, IProducts } from "./../interface/product";
import { HookFetch } from "./../api";

import ProductVue from "./Product.vue";
import { router } from "../routes";

const products = ref<IProducts["products"]>([]);
const copyProducts = ref<IProducts["products"]>([]);

const getProducts = async () => {
  try {
    const allProducts = await HookFetch();
    copyProducts.value = allProducts;
    products.value = allProducts;
  } catch (error) {
    console.log(error);
  }
};

getProducts();

const changeInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.value !== "all") {
    products.value = products.value.filter((product) => {
      const value = target.value as keyof IProduct;
      return product[value];
    });
  } else {
    products.value = copyProducts.value;
  }

  router.push(`/products?filter=${target.value}`);
};
</script>

<style scoped>
.container {
  position: relative;
  margin-block-start: 0rem;
  padding: 5rem 1rem 2.5rem 1rem;
  margin-inline: auto;
  background-color: var(--bg-color-secondary);
  background-image: url("./../assets/img/vector.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 2rem) 3rem;
  min-height: 80vh;
  max-width: 387px;
  border-radius: 13px;
}
@media screen and (min-width: 400px) {
  .container {
    margin-block-start: 10rem;
  }
}
.title {
  color: var(--text-color-primary);
  font-size: var(--font-size-lg);
}
.description {
  color: var(--text-color-secondary);
  font-size: var(--font-size-base);
  font-weight: 600;
  max-width: 500px;
  margin: 0.55rem auto;
}
.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1.25rem 0;
}
.controls label {
  color: var(--text-color-primary);
  font-weight: 600;
  font-size: var(--font-size-md);
  cursor: pointer;
  padding-inline: 0.7rem;
  padding-block: 0.5rem;
  border-radius: 9px;
}
label:has(input[type="radio"]:checked) {
  background-color: var(--btn-bg-primary);
}

.group-products {
  padding: 1.25rem 0;
  display: grid;
  grid-template-columns: repeat(1, min(260px, 100%));
  gap: 3.25rem 1.5rem;
  justify-content: center;
}
@media screen and (min-width: 680px) {
  .container {
    max-width: 84%;
    background-position: calc(80% - 7.5rem) 1rem;
  }
  .group-products {
    grid-template-columns: repeat(2, 260px);
  }
}
@media screen and (min-width: 1024px) {
  .group-products {
    grid-template-columns: repeat(3, 260px);
  }
}
</style>

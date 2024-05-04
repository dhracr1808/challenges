<!-- <template>
  <div class="container__carrosel">
    <div class="layout__carrosel">
      <div class="carrosel">
        <div class="container__items">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container__carrosel {
  width: 100%;
  min-height: 100svh;
  background-color: lightblue;
  padding: 1px;
}
.layout__carrosel {
  max-width: 800px;
  margin: 3rem auto;
  height: 500px;
  background-color: yellow;
}
.carrosel {
  display: grid;
  grid-template-columns: 1fr;
  background-color: violet;
  grid-template-rows: 1fr;
  height: 100%;
  overflow: hidden;
}
.container__items {
  padding: 3px;
  display: grid;
  grid-auto-flow: column;
  /* grid-auto-columns: 30rem; */

  background-color: skyblue;
  overflow: scroll;
  height: 100%;
  /*  justify-items: stretch; */
}
.item {
  height: 100%;
  width: 100%;
  background: lime;
  justify-items: stretch;
}

.item:nth-child(2) {
  background-color: seagreen;
}

.item:last-child {
  background-color: aqua;
}
</style>
 -->

<!-- <template>
  <div style="width: 100%; height: 70vh">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
 -->

<template>
  <div
    style="width: 100%; background-color: yellow; padding: 2rem; height: 70vh"
  >
    <swiper
      :slidesPerView="width"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      @slideChange="
        (slide) => {
          console.log(slide);
          console.log('camio la data', slide.allowTouchMove);
        }
      "
      :modules="modules"
      class="mySwiper"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <BottonesCarusel :current="10" />
      <swiper-slide>
        <InternoSlider />
        <div style="width: 100%; height: 100%; background-color: rebeccapurple">
          hello
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
// Import Swiper Vue.js componentsimport { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import InternoSlider from "./InternoSlider.vue";
import "swiper/css";

import "swiper/css/pagination";

import BottonesCarusel from "./BotonesCarousel.vue";

// import required modules

//import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BottonesCarusel,
    InternoSlider,
  },
  setup() {
    const width = window.innerWidth < 760 ? 3 : 4;

    return {
      modules: [Autoplay],
      width,
    };
  },
};
</script>

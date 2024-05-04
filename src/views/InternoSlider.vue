<template>
  <p>Current slide is {{ swiperSlide.isActive ? "active" : "not active" }}</p>
  <div>
    <h1>slider</h1>
    <h1 :style="{ color: swiperSlide.isActive ? 'red' : 'blue' }">slider</h1>
    <h1>slider</h1>
    <h1>slider</h1>
  </div>
</template>
<script lang="ts">
import { useSwiperSlide } from "swiper/vue";

export default {
  setup() {
    const swiperSlide = useSwiperSlide();
    console.log(swiperSlide);
    return {
      swiperSlide,
    };
  },
};
</script>

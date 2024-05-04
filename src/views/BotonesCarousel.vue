<template>
  <div class="botones-slider">
    <!-- <p style="background-color: white; padding: 1rem">
      Current slide is {{ swiperSlide?.isActive ? "active" : "not active" }} -
      {{ current }}
    </p> -->
    <button @click="swiper?.slidePrev()">prev</button>
    <button @click="swiper?.slideNext()">next</button>
  </div>
</template>
<script lang="ts" setup { }>
import { useSwiper } from "swiper/vue";
import { watch } from "vue";

const swiper = useSwiper();
//const swiperSlide = useSwiperSlide();

defineProps<{ current: number }>();

watch(
  () => {
    return swiper.value.activeIndex;
  },
  () => {
    swiper.value.activeIndex = swiper.value.activeIndex;
  },
  { immediate: true }
);
</script>

<style>
.botones-slider {
  position: absolute;
  z-index: 90;
  left: 0;
  top: 0;
}
</style>

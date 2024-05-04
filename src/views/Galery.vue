<template>
  <div class="galery">
    <div class="galery__image">
      <img
        src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
        alt=""
        loading="lazy"
      />
    </div>
    <div
      class="content"
      @mousemove.self="mousemove"
      @mousedown.self="mousedown"
      @mouseleave.self="mouseleave"
      @mouseup.self="mouseup"
    >
      <div class="content-expanded"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isdow = ref(false);
const isTop = ref(0);
const mousemove = (e: MouseEvent) => {
  if (isdow.value) {
    console.log(isTop.value);
    if (isTop.value === 0 || isTop.value < e.clientY) {
      console.log("ss");
      const element = e.target as HTMLElement;
      element.classList.add("active");
    } else {
      const element = e.target as HTMLElement;
      element.classList.remove("active");
    }
  }
};

const mousedown = () => {
  isdow.value = true;
};

const mouseleave = () => {
  isdow.value = false;
};

const mouseup = (e: MouseEvent) => {
  isTop.value = e.clientY;
  isdow.value = false;
};
/* 
bar.addEventListener("mousemove", (e: MouseEvent) => {
      if (this.isdow) this.changeLineBar(e, bar);
      this.mousemove(e, bar);
    });
    bar.addEventListener("mousedown", () => this.eventBar(true));
    bar.addEventListener("mouseleave", () => this.removeClassEvants());
    bar.addEventListener("mouseup", () => this.eventBar());


*/

/* const toggleData = (event: MouseEvent) => {
  const target = event.pageX;
  console.log(target);
}; */
</script>

<style scoped lang="css">
.galery {
  --bg-hover-color: #f5f5f5;
  width: 100%;
  height: 100svh;
  position: relative;
}
.galery__image {
  height: 60svh;
  width: 100%;
  display: flex;
  justify-content: center;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.content {
  padding: 0.5rem;
  background: #ffffff;
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  border-radius: 0 70px 0 0;
  z-index: 10;
  transition: height 0.5s ease-in;
}
.content::before {
  content: "";
  width: 100px;
  height: 100px;
  top: -100px;
  left: 0;
  background-color: transparent;
  position: absolute;
  border-radius: 0 0 0 70px;
  transform: rotate(0deg);
  z-index: 20;
  box-shadow: -35px 10px 1px 5px #fff;
  pointer-events: none;
}

.content:hover {
  background: var(--bg-hover-color);
}

.content:hover::before {
  box-shadow: -35px 10px 1px 5px var(--bg-hover-color);
}
.content::after {
  content: "";
  position: absolute;
  width: 30%;
  height: 10px;
  background-color: #cccccc;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
}
.content.active {
  height: 80svh;
}
</style>

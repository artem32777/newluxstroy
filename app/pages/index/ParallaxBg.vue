<script setup lang="ts">
import { useParallax } from '@vueuse/core'

const parallaxTarget = ref(null)
const { tilt, roll } = useParallax(parallaxTarget)
</script>

<template>
	<div
		class="scroll-fixed img-container"
	>
		<NuxtImg
			ref="parallaxTarget"
			src="img/2.webp"
			class="img"
			:style="{
				transform: `translateX(${roll * 100}px) translateY(${tilt * 100}px)`,
			}"
		/>
	</div>
</template>

<style scoped>
.img-container {
  position: fixed;
  z-index: -2;
  left: -5%;
  top: -5%;
  width: 110%;
  height: 110%;
}

.img {
  z-index: 3;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
  object-fit: cover;
}
</style>

<script setup lang="ts">
import Hero from '~/pages/index/_components/hero/Hero.vue'
import { useParallax } from '@vueuse/core'
import Services from '~/pages/index/_components/services/Services.vue'
import HeroSlider from '~/components/HeroSlider.vue'
import ParallaxBg from '~/pages/index/ParallaxBg.vue'
</script>

<template>
	<div>
		<Hero />
		<HeroSlider />
		<Services v-gsap.parallax.slower-4 />
		<div>
			<section class="section1">
				<div
					v-gsap.whenVisible.animateText.slow="{ start: 'top 90%', text: 'Lorem Ipsum...' }"
					class="text-3xl"
				/>
			</section>

			<section class="section2  gsap-selector">
				<div
					v-gsap.whenVisible.animateText.slow
					class="text"
				>
					РЕМОНТ
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.section1, .section2 {
  width: 100%;
  min-height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  margin-top: 100px;
  margin-bottom: 100px;
}

.section1::before {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-size: cover;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  transform: translateZ(-1px) scale(2.2);
  filter: blur(3px);
  max-height: 100vh;
  z-index: 1;
}

.section2 {
  background: rgb(68, 35, 19);
}

.text {
  top: 30%;
  left: 50%;
  z-index: 5;
  position: absolute;
  font-size: 15vw;
  font-weight: 500;
  text-shadow: 2px 2px 5px rbga(0, 0, 0, 0.3);
  transform: scale(1, 1.1) translate(-50%, 10%);
  display: flex;
}
</style>

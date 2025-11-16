<script setup lang="ts">
import Hero from '~/pages/index/_components/hero/Hero.vue'
import { useParallax } from '@vueuse/core'
import gsap from 'gsap'

const parallaxTarget = ref(null)
const { tilt, roll } = useParallax(parallaxTarget)

onMounted(() => {
	useGSAP().from('.gsap-selector', {
		onUpdate: (self) => console.log(self),
	})
})
</script>

<template>
	<div>
		<div
			style="padding-right: var(--scrollbar-width)"
			class="img-container"
		>
			<NuxtImg
				ref="parallaxTarget"
				src="img/1.jpg"
				class="img"
				:style="{
					transform: `translateX(${roll * 50}px) translateY(${tilt * 50}px)`,
				}"
			/>
		</div>
		<Hero />
		<div>
			<section
				class="section1"
			>
				<div
					v-gsap.parallax.slower-4
					class="text"
				>
					inside
				</div>
			</section>
			<section class="section1">
				<div
					v-gsap.parallax.slower-4
					class="text"
				>
					STUDIO
				</div>
			</section>

			<section class="section2  gsap-selector">
				<div
					v-gsap.parallax.slower-4
					class="text"
				>
					РЕМОНТ
				</div>
			</section>
		</div>
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

.section1, .section2 {
  width: 100%;
  min-height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  animation: 5s ease-in-out infinite linear;
}

.section1 {
  animation: section1 2s infinite linear;
  margin-top: 120vw;
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
  max-height: 200vh;
  z-index: 3;
}

.section2 {
  background: rgb(68, 35, 19);
}

.text {
  top: 30%;
  left: 50%;
  position: absolute;
  font-size: 20vw;
  font-weight: 500;
  text-shadow: 2px 2px 5px rbga(0, 0, 0, 0.3);
  transform: scale(1, 1.1) translate(-50%, 10%);
}
</style>

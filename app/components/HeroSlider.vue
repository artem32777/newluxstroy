<script setup lang="ts">
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectFade,
	Zoom,
	EffectCube,
	EffectCoverflow,
	Parallax,
	Autoplay,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/zoom'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'
import 'swiper/css/parallax'

const onSwiper = (swiper) => {
	console.log(swiper)
}

const onSlideChange = () => {
	console.log('slide change')
}

const slides1 = ['Создаём', 'эстетичные', 'функциональные', 'пространства', 'Создаём', 'будущее', 'вместе']
const slides2 = ['Создаем', 'будущее', 'вместе']

const slides = [
	{
		text: 'Создаём эстетичные и функциональные пространства',
	},
	{
		text: 'Создаём будущее вместе',
	},
]
</script>

<template>
	<div class="fixed top-0 h-dvh w-full">
		<ClientOnly>
			<swiper
				:autoplay="{
					delay: 5000,
				}"
				speed="3000"
				:zoom="{
					maxRatio: 5,
				}"
				:modules="[Zoom, EffectCube, EffectFade, EffectCoverflow, Parallax, Autoplay]"
				:slides-per-view="1"
				effect="fade"
				:parallax="true"
				:fade-effect="{
					crossFade: true,
				}"

				@swiper="onSwiper"
				@slide-change="onSlideChange"
			>
				<swiper-slide
					v-for="slide in 3"
					:key="slide"
				>
					<div class="relative">
						<div class=" absolute top-50 left-20 grid h-1/2 justify-between text-7xl">
							<!-- Each slide has parallax title -->
							<div
								data-swiper-parallax="-100"
							>
								Slide {{ slide }}
							</div>
							<!-- Parallax subtitle -->
							<div
								class="text-7xl"
								data-swiper-parallax="-200"
							>
								Subtitle
							</div>
							<!-- And parallax text with custom transition duration -->
							<div
								class="text"
								data-swiper-parallax="-300"
								data-swiper-parallax-duration="600"
							>
								<p>Lorem ipsum dolor sit amet, ...</p>
							</div>
							<!-- Opacity parallax -->
							<div data-swiper-parallax-opacity="0">
								I will change opacity
							</div>
							<!-- Scale parallax -->
							<div data-swiper-parallax-scale="0.15">
								I will change scale
							</div>
						</div>
						<NuxtImg
							:src="`img/${slide}.webp`"
							class="img"
						/>
					</div>
				</swiper-slide>
			</swiper>
		</ClientOnly>
	</div>
</template>

<style scoped>
.img {
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-out;
  object-fit: cover;
}
</style>

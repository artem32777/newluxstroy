<script setup lang="ts">
import ServicesItem from '~/pages/index/_components/services/ServicesItem.vue'

onMounted(() => {
	const tl = useGSAP().timeline({
		repeat: 1,
	})

	tl.from('.img-1', {
		y: 250,
		opacity: 0,
		duration: 5,
		scale: 0,
		scrollTrigger: {
			trigger: '.img-1',
			start: 'bottom bottom',
			end: '-120%',
			scrub: true,
		},
	})
})
</script>

<template>
	<div class="bg-background/95 relative mt-[150dvh] h-dvh p-20 text-3xl backdrop-blur-xl">
		<ServicesItem class="img-1 absolute left-10 h-[25vh] w-[25vw] shadow-2xl" />
		<div
			v-gsap.whenVisible.animateText.slow="{ start: 'top 100%', end: 'top 0', text: 'Создаём эстетичные и функциональные пространства' }"
			class="w-1/2 text-7xl"
		/>
		<div>
			<span
				v-gsap.whenVisible.animateText.slow="{ start: 'top: 10%' }"

				class="text-5xl"
			>
				Работаем с частными и коммерческими проектами. Берём на себя все задачи по оформлению интерьера: от создания проекта дизайна до финальной отделки
				Создаём гармонию между визуальной и практической составляющими интерьера
			</span>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
  font-size: 40px;
}
</style>

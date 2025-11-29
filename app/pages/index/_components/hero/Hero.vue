<script setup lang="ts">
import HeroDrawer from '~/pages/index/_components/hero/HeroDrawer.vue'
</script>

`
<template>
	<section class="bg-background h-[22vw] w-[102%] overflow-hidden">
		<div class="flex justify-between px-20 pt-[10vw]">
			<div
				v-gsap.whenVisible.animateText.slow
				class="title"
			>
				Строительная <br> компания
			</div>
			<HeroDrawer />
		</div>
	</section>
</template>

<style scoped>
.title {
  font-size: 3vw;
  font-style: italic;
  line-height: 1;
  transition: all 0.1s ease 0s;
}
</style>

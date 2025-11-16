<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import HeroDrawer from '~/pages/index/_components/hero/HeroDrawer.vue'
</script>

`
<template>
	<section
		ref="target"
		class="bg-background h-[22vw] w-[102%] overflow-hidden"
	>
		<div
			class="flex items-center justify-between px-20 pt-[10vw] transition-transform duration-200 ease-in "
		>
			<div
				v-gsap.parallax.slower-4
				class="title absolute bottom-0"
			>
				Строительная <br> компания
			</div>
			<HeroDrawer>
				/>
			</herodrawer>
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

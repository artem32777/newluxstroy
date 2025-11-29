<script setup lang="ts">
import TheHeaderMenu from '~/components/layout/default/header/TheHeaderMenu.vue'
import TheLogo from '~/components/logo/TheLogo.vue'
import TheHeaderSocials from '~/components/layout/default/header/TheHeaderSocials.vue'
</script>

<template>
	<header class="scroll-fixed bg-background  fixed z-20 w-full">
		<div class="flex w-full items-center justify-between gap-10 p-5">
			<TheLogo />
			<TheHeaderMenu />
			<div class="flex items-center gap-10">
				<a
					href="tel:89632467777"
					class="hover-1 text-2xl whitespace-nowrap"
				>
					8-963-246-77-77
				</a>
				<NuxtLink
					to="#contacts"
					class="text-2xl"
				>
					Контакты
				</NuxtLink>
				<TheHeaderSocials />
			</div>
		</div>
	</header>
</template>

<style scoped>
.hover-1 {
  @media (any-hover: hover) {
    &:hover {
      text-shadow: 0 0 15px var(--color-yellow-500);
      //transform: scale(1.03);
      //filter:
      //    drop-shadow(0 0 20px var(--color-yellow-500))
      //    drop-shadow(0 0 30px var(--color-yellow-500));
    }
  }
}
</style>

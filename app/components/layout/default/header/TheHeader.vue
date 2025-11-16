<script setup lang="ts">
import TheHeaderMenu from '~/components/layout/default/header/TheHeaderMenu.vue'
import TheLogo from '~/components/logo/TheLogo.vue'
import TheHeaderSocials from '~/components/layout/default/header/TheHeaderSocials.vue'
</script>

<template>
	<header
		style="padding-right: var(--scrollbar-width)"
		class="bg-background fixed z-20  flex w-full items-center justify-between p-5"
	>
		<div class="grow">
			<TheHeaderMenu />
		</div>
		<TheLogo />
		<div class="flex grow items-center justify-around">
			<a
				href="tel:89632467777"
				class="text-2xl"
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
	</header>
</template>

<style scoped>

</style>

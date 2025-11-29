<script setup lang="ts">
import TheHeader from '~/components/layout/default/header/TheHeader.vue'
</script>

<template>
	<div>
		<TheHeader />
		<div>
			<slot />
		</div>
	</div>
</template>

<style scoped>

</style>

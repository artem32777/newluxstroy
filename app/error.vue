<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({ error: Object as () => NuxtError })
</script>

<template>
	<div class="error-page">
		<h1>{{ error?.statusCode }}</h1>
		<p>{{ error?.message }}</p>
		<NuxtLink to="/">Go back home</NuxtLink>
	</div>
</template>

<style scoped lang="scss"></style>

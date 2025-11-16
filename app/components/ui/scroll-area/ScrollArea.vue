<script setup lang="ts">
import type { ScrollAreaRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit, useScroll } from '@vueuse/core'
import {
	ScrollAreaCorner,
	ScrollAreaRoot,

	ScrollAreaViewport,
} from 'reka-ui'
import { cn } from '@/lib/utils'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
	<ScrollAreaRoot
		v-bind="delegatedProps"
		data-slot="scroll-area"
		:class="cn('relative', props.class)"
	>
		<ScrollAreaViewport
			data-slot="scroll-area-viewport"
			class="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
		>
			<slot />
		</ScrollAreaViewport>
		<ClientOnly>
			<ScrollBar class="z-50" />
		</ClientOnly>
		<ScrollAreaCorner />
	</ScrollAreaRoot>
</template>

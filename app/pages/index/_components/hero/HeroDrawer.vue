<script setup lang="ts">
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '~/components/ui/button'
import HeroButton from '~/pages/index/_components/hero/HeroButton.vue'
import HeroFrom from '~/pages/index/_components/hero/HeroFrom.vue'

const isOpen = ref(false)
</script>

<template>
	<Drawer @update:open="isOpen = $event">
		<DrawerTrigger as-child>
			<HeroButton :is-open="isOpen" />
		</DrawerTrigger>
		<DrawerContent class="min-h-[80vh]">
			<DrawerHeader class="text-center">
				<DrawerTitle class="text-xl">
					Ответьте на  вопросы
				</DrawerTitle>
				<DrawerDescription class="text-lg">
					мы свяжемся с вами и назовём стоимость реализации проекта
				</DrawerDescription>
				<HeroFrom />
			</DrawerHeader>
			<DrawerClose>
				<Button
					class="absolute top-3 right-3"
					size="icon"
				>
					Cancel
				</Button>
			</DrawerClose>
			<DrawerFooter>
				<Button>Submit</Button>
				<DrawerClose>
					<Button variant="outline">
						Cancel
					</Button>
				</DrawerClose>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
</template>

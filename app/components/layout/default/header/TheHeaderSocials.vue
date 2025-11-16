<script setup lang="ts">
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'

const items: { icon: string, url: string }[] = [
	{ icon: 'tg', url: '/tg' },
	{ icon: 'tg', url: '/tg' },
	{ icon: 'tg', url: '/tg' },
]
</script>

<template>
	<div>
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem
					v-for="item in items"
					:key="item.url"
				>
					<a
						:href="item.url"
						target="_blank"
						class="bg-foreground hover:bg-background hover:text-background  items center flex justify-center  rounded-full p-1.5"
					>
						<Icon
							class="text-background hover:text-primary size-9"
							:name="`i:${item.icon}`"
						/>
					</a>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
		<div />
	</div>
</template>

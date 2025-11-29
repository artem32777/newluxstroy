<script setup lang="ts">
const { isOpen } = defineProps<{
	isOpen: boolean
}>()

const isActive = ref(isOpen)
</script>

<template>
	<button
		class="button"
		:class="{ active: isOpen || isActive }"
		@mouseenter="isActive = true"
		@mouseleave="isActive = false"
	>
		<span class="top-key" />
		<span class="text">Рассчитать стоимость</span>
		<span class="bottom-key-1" />
		<span class="bottom-key-2" />
	</button>
</template>

<style scoped lang="scss">
.button {
  border: 3px solid var(--primary);
  color: var(--primary);
  margin: 0;
  padding: 1.25em 3em;
  position: relative;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 20px;

  &::before {
    content: " ";
    width: 1.5625rem;
    height: 3px;
    background: var(--primary);;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  &.active {
    color: var(--background);
    background: var(--primary);
    &::before {
      width: 0.9375rem;
      background: var(--background);
    }
    .text {
      color: var(--background);
      padding-left: 1.5em;
    }
    .top-key {
      left: -2px;
      width: 0;
    }
    .bottom-key-1,
    .bottom-key-2 {
      right: 0;
      width: 0;
    }
  }

}

.text {
  font-size: 1.125em;
  line-height: 1.33333em;
  padding-left: 2em;
  display: block;
  text-align: left;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--primary);
}

.top-key {
  height: 3px;
  width: 1.5625rem;
  top: -3px;
  left: 0.625rem;
  position: absolute;
  background: var(--background);
  transition: width 0.5s ease-out, left 0.3s ease-out;
}

.bottom-key-1 {
  height: 3px;
  width: 1.5625rem;
  right: 1.875rem;
  bottom: -3px;
  position: absolute;
  background: var(--background);
  transition: width 0.5s ease-out, right 0.3s ease-out;
}

.bottom-key-2 {
  height: 3px;
  width: 0.625rem;
  right: 0.625rem;
  bottom: -3px;
  position: absolute;
  background: var(--background);
  transition: width 0.5s ease-out, right 0.3s ease-out;
}
</style>

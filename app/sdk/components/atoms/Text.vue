<template>
	<div
		class="text"
		:class="textClass"
		:style="textStyle"
	>
		Text component
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	token: {
		type: String,
		default: 'body-medium',
	},
	color: {
		type: String,
		default: 'black',
	},
});

const textClass = computed(() => {
	return props.token;
});

const textStyle = computed(() => {
	return {
		color: `var(--tds-${props.color})`,
	};
});
</script>

<style lang="scss" scoped>
.text {
	font-family: 'Roboto';
}
</style>

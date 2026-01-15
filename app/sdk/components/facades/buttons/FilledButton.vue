<template>
	<BaseButton
		:fill-color="fillColor"
		:label-color="contentColor"
	/>
</template>

<script lang="ts" setup>
import type { TextColorToken, TonicColorToken } from '@/sdk/types/types/ColorToken';

const props = defineProps({
	color: {
		type: String as PropType<TonicColorToken>,
		default: 'action',
	},
});

const fillColor = computed<TonicColorToken>(() => props.color);
const contentColor = computed<TextColorToken>(() => `${props.color}-primary`);
</script>

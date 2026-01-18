<template>
	<BaseButton
		:stroke-color="contentColor"
		:stroke-width="1"
		:label-color="contentColor"
		:icon-color="contentColor"
		:reaction-color="reactionColor"
	/>
</template>

<script lang="ts" setup>
import type { FillColorToken, TextColorToken, TonicColorToken } from '@/sdk/types/types/ColorToken';

const props = defineProps({
	color: {
		type: String as PropType<TonicColorToken>,
		default: 'action',
	},
});

const contentColor = computed<TextColorToken>(() => `${props.color}`);
const reactionColor = computed<FillColorToken>(() => `${props.color}-surface`);
</script>

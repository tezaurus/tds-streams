<template>
	<div
		class="divider"
		:style="lineStyle"
	/>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import type { OutlineColorToken } from '@/sdk/types/types/ColorToken';
import type { TCssTulip } from '@/sdk/types/types/Tulips';
import { getCssTulipRule, getPx } from '@/sdk/utils/css';

type TDividerSize = 'fill' | number | string;

const props = defineProps({
	color: {
		type: String as PropType<OutlineColorToken>,
		default: 'space-outline',
	},
	width: {
		type: [String, Number] as PropType<TDividerSize>,
		default: 'fill',
	},
	height: {
		type: [String, Number] as PropType<TDividerSize>,
		default: 1,
	},
	margin: {
		type: [Number, Array] as PropType<number | TCssTulip>,
		default: 0,
	},
});

const lineStyle = computed<CSSProperties>(() => {
	let width = undefined;
	if (props.width === 'fill') {
		width = '100%';
	} else if (typeof props.width === 'number') {
		width = getPx(props.width);
	} else {
		width = props.width;
	}

	let height = undefined;
	if (props.height === 'fill') {
		height = '100%';
	} else if (typeof props.height === 'number') {
		height = getPx(props.height);
	} else {
		height = props.height;
	}

	const margin = getCssTulipRule(props.margin);
	const color = `var(--tds-${props.color})`;

	return {
		width,
		height,
		margin,
		backgroundColor: color,
	};
});
</script>

<template>
	<Component
		class="text"
		:is="as"
		:class="textClass"
		:style="textStyle"
	>
		{{ text }}
	</Component>
</template>

<script lang="ts" setup>
import { getOpacityPercent, getPercent } from '@/sdk/utils/css';
import type { TextColorToken } from '@/sdk/types/types/ColorToken';

type TTextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type TTextAlign = 'left' | 'center' | 'right';
type TTextTransform = 'capitalize' | 'uppercase' | 'lowercase';

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	token: {
		type: String,
		default: 'body-medium-400',
	},
	as: {
		type: String as PropType<TTextTag>,
		default: 'p',
	},
	opacity: {
		type: Number,
		default: 100,
	},
	color: {
		type: String as PropType<TextColorToken>,
		default: 'space-primary',
	},
	align: {
		type: String as PropType<TTextAlign>,
		default: 'left',
	},
	transform: {
		type: String as PropType<TTextTransform>,
		default: undefined,
	},
	truncate: {
		type: Boolean,
		default: false,
	},
	noselect: {
		type: Boolean,
		default: false,
	},
});

const textClass = computed(() => {
	const classes: string[] = [];

	const tokenParts = props.token.split('-');

	const tokenBase = `${tokenParts[0]}-${tokenParts[1]}`;
	const tokenWeight = `fw-${tokenParts[2] ?? '400'}`;

	classes.push(tokenBase);
	classes.push(tokenWeight);

	if (props.truncate) {
		classes.push('truncate');
	}

	if (props.noselect) {
		classes.push('noselect');
	}

	return classes;
});

const textStyle = computed(() => {
	const color = `var(--tds-${props.color})`;
	const opacity = getPercent(getOpacityPercent(props.opacity));

	return {
		color,
		opacity,
		textAlign: props.align,
		textTransform: props.transform,
	};
});
</script>

<style lang="scss" scoped>
.text {
	font-family: 'Roboto';
}
</style>

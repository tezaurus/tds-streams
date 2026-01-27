<template>
	<span
		class="icon"
		:class="iconClass"
		:style="iconStyle"
		v-html="icon"
	/>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import type { TextColorToken } from '@/sdk/types/types/ColorToken';
import { getOpacityPercent, getPercent, getPx } from '@/sdk/utils/css';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String as PropType<TextColorToken>,
		default: 'space-primary',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	pointer: {
		type: Boolean,
		default: false,
	},
	opacity: {
		type: Number,
		default: undefined,
	},
	size: {
		type: Number,
		default: 24,
	},
});

const icon = ref('');

const iconClass = computed<string[]>(() => {
	const classes: string[] = [];

	if (props.disabled) {
		classes.push('disabled');
	}

	if (props.pointer) {
		classes.push('cursor-pointer');
	}

	return classes;
});

const iconStyle = computed<CSSProperties>(() => {
	const color = `var(--tds-${props.color})`;
	const opacity = getPercent(getOpacityPercent(props.opacity));
	const width = getPx(props.size);
	const height = getPx(props.size);

	return {
		width,
		height,
		color,
		opacity,
		'--svg-icon-fill': color,
		'--svg-icon-stroke': color,
		'--svg-icon-fill-opacity': 1,
		'--svg-icon-stroke-opacity': 1,
		'--svg-icon-stroke-width': 0,
		'--svg-icon-width': width,
		'--svg-icon-height': height,
	};
});

watchEffect(async () => {
	const fill = 0;
	const weight = 400 as const;
	const grade = 0 as const;

	const name = `../../assets/icons/${props.name}_FILL${fill}_wght${weight}_GRAD${grade}_opsz${props.size}.svg`;
	const defaultName = `../../assets/icons/${props.name}_FILL${fill}_wght${weight}_GRAD${grade}_opsz${24}.svg`;

	const iconsImport = import.meta.glob('../../assets/icons/**/**.svg', {
		import: 'default',
		eager: false,
		query: {
			raw: '',
		},
	});

	const loader =
		iconsImport[name] ??
		iconsImport[defaultName];

	if (!loader) {
		throw new Error('Default icon not found');
	}

	icon.value = await loader() as string;
});
</script>

<style lang="scss">
.icon {
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		fill: var(--svg-icon-fill) !important;
		stroke: var(--svg-icon-stroke) !important;
		fill-opacity: var(--svg-icon-fill-opacity) !important;
		stroke-opacity: var(--svg-icon-stroke-opacity) !important;
		stroke-width: var(--svg-icon-stroke-width) !important;
		width: var(--svg-icon-width) !important;
		height: var(--svg-icon-height) !important;
	}
}
</style>

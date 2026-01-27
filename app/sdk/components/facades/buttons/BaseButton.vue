<template>
	<Container
		class="base-button"
		:width="label ? 'hug' : buttonConfig[size].size"
		:height="buttonConfig[size].size"
		:padding="[0, buttonConfig[size].padding]"
		:border-radius="rounded ? 9999 : 8"
		reaction
		shrink
	>
		<Flex
			align-x="center"
			:reverse="reverse"
		>
			<!-- Icon -->
			<Container
				v-if="icon"
				:padding="[
					0,
					label && reverse ? 6 : 0,
					0,
					label && !reverse ? 6 : 0,
				]"
			>
				<Icon
					:name="icon"
					:color="iconColor"
					:size="buttonConfig[size].iconSize"
				/>
			</Container>

			<!-- Label -->
			<Container
				v-if="label"
				:padding="[
					0,
					icon && reverse ? 4 : 8,
					0,
					icon && !reverse ? 4 : 8,
				]"
			>
				<Text
					:token="`label-${buttonConfig[size].labelGrade}-500`"
					:color="labelColor"
					:text="label"
					noselect
				/>
			</Container>
		</Flex>
	</Container>
</template>

<script lang="ts" setup>
import type { TShirt } from '@/sdk/types/types/TShirt';
import type { TextColorToken } from '@/sdk/types/types/ColorToken';
import type { TypographyGrade } from '@/sdk/types/types/TypographyToken';

type TButtonConfig = {
	size: number;
	iconSize: number;
	padding: number;
	labelGrade: TypographyGrade;
}

const buttonConfig: Record<TShirt, TButtonConfig> = {
	s: {
		size: 32,
		iconSize: 20,
		padding: 4,
		labelGrade: 'small',
	},
	m: {
		size: 40,
		iconSize: 24,
		padding: 8,
		labelGrade: 'medium',
	},
	l: {
		size: 48,
		iconSize: 32,
		padding: 12,
		labelGrade: 'large',
	},
};

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	labelColor: {
		type: String as PropType<TextColorToken>,
		default: 'action-primary',
	},
	icon: {
		type: String,
		default: '',
	},
	iconColor: {
		type: String as PropType<TextColorToken>,
		default: 'space-primary',
	},
	size: {
		type: String as PropType<TShirt>,
		default: 'm',
	},
	rounded: {
		type: Boolean,
		default: false,
	},
	reverse: {
		type: Boolean,
		default: false,
	},
});
</script>

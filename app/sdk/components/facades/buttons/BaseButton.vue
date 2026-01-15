<template>
	<Container
		class="base-button"
		:fill-color="fillColor"
		:width="label ? 'hug' : buttonConfig[size].size"
		:height="buttonConfig[size].size"
		:padding="[0, buttonConfig[size].padding]"
		:border-radius="rounded ? 9999 : 8"
		reaction
	>
		<Flex>
			<!-- Icon -->
			<Container
				v-if="false"
				fill-color="brand"
				:width="24"
				:height="24"
			/>

			<Container
				v-if="label"
				:padding="[0, 8]"
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
import type { FillColorToken, TextColorToken } from '@/sdk/types/types/ColorToken';
import type { TypographyGrade } from '@/sdk/types/types/TypographyToken';

type TButtonConfig = {
	size: number;
	padding: number;
	labelGrade: TypographyGrade;
}

const buttonConfig: Record<TShirt, TButtonConfig> = {
	s: {
		size: 32,
		padding: 4,
		labelGrade: 'small',
	},
	m: {
		size: 40,
		padding: 8,
		labelGrade: 'medium',
	},
	l: {
		size: 48,
		padding: 16,
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
	fillColor: {
		type: String as PropType<FillColorToken>,
		default: 'action',
	},
	size: {
		type: String as PropType<TShirt>,
		default: 'm',
	},
	rounded: {
		type: Boolean,
		default: false,
	},
});
</script>

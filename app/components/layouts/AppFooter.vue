<template>
	<Container
		fill-color="space-surface"
		:height="52"
		:padding="[0, 16]"
	>
		<Flex
			align-x="center"
		>
			<!-- Center -->
			<Text
				token="body-medium-400"
				color="space-surface-secondary"
				:text="title"
			/>
		</Flex>
	</Container>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

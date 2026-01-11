<template>
	<Container
		fill-color="space-surface-item"
		:height="52"
		:padding="[0, 16]"
	>
		<Flex
			align-x="between"
		>
			<!-- Start -->
			<Text
				:text="title"
			/>

			<!-- End -->
			<Container
				fill-color="action"
				:padding="[8, 12]"
				reaction
				rounded
			>
				<Text
					text="Log in"
					color="action-primary"
					noselect
				/>
			</Container>
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

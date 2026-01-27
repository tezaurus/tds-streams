<template>
	<Container
		:height="40"
		:padding="[0, 8]"
	>
		<Row
			:gap="8"
		>
			<!-- Leading -->
			<Icon
				name="drag_handler"
				:opacity="20"
			/>

			<!-- Center -->
			<Container
				grow
			>
				<Text
					token="title-small-500"
					:text="title"
				/>
			</Container>

			<!-- Trailing -->
			<Container
				fill-color="action"
				:width="36"
				:height="20"
				rounded
			/>
		</Row>
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

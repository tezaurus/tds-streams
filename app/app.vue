<template>
	<Container
		fill-color="brand"
		:padding="16"
		:active="activeIndex === 0"
		reaction
		@click="activeIndex = 0"
	>
		<Text
			text="Title"
			token="title-medium-500"
			color="brand-primary"
			:stroke-width="4"
			:style="{
				marginBottom: '4px',
			}"
		/>

		<Text
			text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente itaque illum veniam aut quisquam, alias laboriosam obcaecati beatae temporibus inventore accusantium facilis consectetur eius sunt molestiae blanditiis. Doloremque, quod ipsum!"
			token="body-small-400"
			color="brand-secondary"
			:stroke-width="4"
		/>
	</Container>

	<Container
		fill-color="brand"
		:padding="16"
		:active="activeIndex === 1"
		reaction
		@click="activeIndex = 1"
	>
		<Text
			text="Title"
			token="title-medium-500"
			color="brand-primary"
			:stroke-width="4"
			:style="{
				marginBottom: '4px',
			}"
		/>

		<Text
			text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente itaque illum veniam aut quisquam, alias laboriosam obcaecati beatae temporibus inventore accusantium facilis consectetur eius sunt molestiae blanditiis. Doloremque, quod ipsum!"
			token="body-small-400"
			color="brand-secondary"
			:stroke-width="4"
		/>
	</Container>

	<br />

	<Container
		fill-color="action"
		:padding="[8, 12]"
		:border-radius="8"
		:style="{
			width: 'fit-content',
		}"
		reaction
		@click="console.log('pressed')"
	>
		<Text
			text="Press me"
			token="label-medium-500"
			color="action-primary"
			align="center"
			noselect
		/>
	</Container>

	<Container
		fill-color="black"
		:padding="[8, 12]"
		:border-radius="8"
		:style="{
			width: 'fit-content',
		}"
		reaction
		@click="console.log('pressed')"
	>
		<Text
			text="Press me"
			token="label-medium-500"
			color="black-primary"
			align="center"
			noselect
		/>
	</Container>

	<Container
		fill-color="brand"
		:padding="[8, 12]"
		:border-radius="8"
		:style="{
			width: 'fit-content',
		}"
		reaction
		@click="console.log('pressed')"
	>
		<Text
			text="Press me"
			token="label-medium-500"
			color="brand-primary"
			align="center"
			noselect
		/>
	</Container>
</template>

<script lang="ts" setup>
const activeIndex = ref(-1);
</script>

<template>
	<Container
		height="hug"
	>
		<Column>
			<!-- Header -->
			<Container
				:height="56"
				:padding="[0, 8]"
			>
				<Row
					align-x="between"
				>
					<!-- Leading -->
					<Row
						:gap="8"
					>
						<GhostButton
							icon="arrow_back"
							color="black"
						/>

						<Column
							align-y="center"
						>
							<Text
								text="Первая страница"
								token="title-small-500"
							/>

							<Text
								text="Собираем страницу на компонентах ДС"
								token="label-small-400"
								color="space-secondary"
							/>
						</Column>
					</Row>

					<!-- Trailing -->
					<GhostButton
						label="Помощь"
						rounded
					/>
				</Row>
			</Container>

			<Divider />

			<!-- Content -->
			<Container>
				<!-- Body -->
				<Container
					:padding="16"
				>
					<Column
						:gap="24"
					>
						<!-- Messages -->
						<Column
							:gap="16"
						>
							<!-- Promo -->
							<Container
								background-image="/images/promo-message-bg.png"
								:padding="16"
								:border-radius="12"
							>
								<Row
									align-x="between"
								>
									<Text
										text="Это текст какого-либо сообщения, на которое нужно обратить внимание."
										color="action-primary"
									/>

									<FilledButton
										label="Принято"
										rounded
									/>
								</Row>
							</Container>

							<!-- Instant -->
							<Container
								fill-color="action-surface"
								:padding="16"
								:border-radius="12"
							>
								<Row
									align-x="between"
								>
									<Text
										text="Это второстепенное сообщение, которое не содержит важной информации."
										color="action-surface-primary"
									/>

									<GhostButton
										label="Понятно"
										reaction-color="action-surface-item"
										rounded
									/>
								</Row>
							</Container>
						</Column>

						<!-- Items -->
						<Column
							:gap="8"
						>
							<Divider />

							<SettingsItem
								title="Опция 1"
							/>

							<Divider />

							<SettingsItem
								title="Опция 2"
							/>

							<Divider />

							<SettingsItem
								title="Опция 3"
							/>

							<Divider />

							<SettingsItem
								title="Опция 4"
							/>

							<Divider />

							<SettingsItem
								title="Опция 5"
							/>

							<Divider />
						</Column>
					</Column>
				</Container>
			</Container>

			<Divider />

			<!-- Footer -->
			<Container
				:height="56"
			>
				<Center>
					<BrandLogo />
				</Center>
			</Container>
		</Column>
	</Container>
</template>

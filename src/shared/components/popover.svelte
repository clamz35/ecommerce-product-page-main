<div class="popover">
	<div class="popover__body">
		<div class="popover__header">
			<slot name="header" />
		</div>
		<div class="popover__content">
			<slot />
		</div>
	</div>
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;

	.popover {
		position: relative;
		z-index: 20;
		&__body {
			position: absolute;
			top: 18px;
			right: -38px;
			box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
			background-color: var(--clr-primary-contrast);
			border-radius: 10px;
			min-width: 300px;
		}

		&__header {
			color: var(--secondary-color);
			padding: 1.5rem 24px;
			border-bottom: 1px solid #e4e9f2;
			font-weight: 700;
			color: var(--clr-secondary);
		}

		&__content {
			padding: 1.5rem 24px;
		}

		@include sd-down {
			position: static;
			&__body {
				top: auto;
				left: 10px;
				right: 10px;
				z-index: 20;
			}
		}
	}
</style>

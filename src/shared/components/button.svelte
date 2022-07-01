<button on:click class="ep-button" type="button"><slot /></button>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;

	.ep-button {
		display: flex;
		gap: 0.9688rem;
		align-items: center;
		justify-content: center;
		background-color: var(--clr-accent);
		color: var(--clr-accent-contrast);
		border-radius: 10px;
		padding: 22px;
		margin-inline: auto;
		width: 100%;

		font-weight: bold;

		@include addHoverToAccentBgColorElts;
	}
</style>

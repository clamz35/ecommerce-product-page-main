<script lang="ts">
	import { addToBody } from '@shared/actions/add-to-body.action';

	export let visible = false;
</script>

<div
	class="dialog-overlay"
	class:dialog-overlay--visible={visible}
	use:addToBody
	on:click={() => (visible = false)}
>
	<div class="dialog" on:click|stopPropagation={() => {}}>
		<button class="btn--unstyled dialog__close-btn" on:click={() => (visible = false)}>
			<img src="/images/icon-close.svg" alt="Close dialog" title="Close dialog" />
		</button>
		<slot />
	</div>
</div>

<style lang="scss" scoped>
	.dialog-overlay {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: none;
		place-items: center;
		background-color: hsl(0 0% 0% / 0.75);
		&--visible {
			display: grid;
		}
	}

	.dialog {
		position: relative;
		width: 500px;
		max-width: 90vw;
		max-height: 90vh;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		&__close-btn {
			filter: invert(1) brightness(2);
			align-self: flex-end;

			&:hover {
				filter: brightness(0) saturate(100%) invert(63%) sepia(20%) saturate(7500%)
					hue-rotate(347deg) brightness(101%) contrast(101%);
			}
		}
	}
</style>

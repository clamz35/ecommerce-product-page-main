<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	let quantity = 1;

	const dispatch = createEventDispatcher();

	function reduceQuantity() {
		if (quantity > 1) {
			quantity--;
			dispatch('updateQuantity', quantity);
		}
	}
	function augmentQuantity() {
		quantity++;
		dispatch('updateQuantity', { quantity });
	}
</script>

<span class="input-number-stepper" {...$$props}>
	<button
		type="button"
		class="btn--unstyled input-number-stepper__btn input-number-stepper__btn-minus"
		aria-label="Reduce quandity"
		disabled={quantity <= 1}
		on:click={reduceQuantity}
	>
		<img src="/images/icon-minus.svg" alt="Reduce quantity" title="Reduce quantity" />
	</button>
	<span class="input-number-stepper__number">{quantity}</span>
	<button
		type="button"
		class="btn--unstyled input-number-stepper__btn input-number-stepper__btn-plus"
		aria-label="Augment quantity"
		on:click={augmentQuantity}
	>
		<img src="/images/icon-plus.svg" alt="Augment quantity" title="Augment quantity" />
	</button>
</span>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;

	.input-number-stepper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 22px;
		background-color: #f6f8fd;
		border-radius: 10px;
		&__btn {
			&:not([disabled]) {
				@include addHoverToAccentImgElts;
			}
			&[disabled] {
				mix-blend-mode: luminosity;
			}
		}
		&__number {
			font-weight: 700;
			color: #000000;
		}
	}
</style>

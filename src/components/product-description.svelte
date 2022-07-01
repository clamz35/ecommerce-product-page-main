<script lang="ts">
	import Button from '@shared/components/button.svelte';
	import InputNumberStepper from '@shared/components/input-number-stepper.svelte';
	import type { Product } from '@shared/models/product.model';
	import { cart } from '@stores/cart.store';
	import ProductPrice from './product-price.svelte';

	export let product: Product;
	let quantity = 1;
	function addToCart() {
		console.log('Adding to cart', product);
		cart.addToCart(product, quantity);
	}

	function updateQuantity(event: CustomEvent<{ quantity: number }>) {
		quantity = +event.detail.quantity;
	}
</script>

<div class="product-description">
	<div class="product-description__surtitle">{product.brand}</div>
	<h1 class="product-description__title">{product.name}</h1>

	<div class="product-description__description">
		{product.description}
	</div>

	<div class="product-description__price"><ProductPrice {product} /></div>

	<div class="product-description__actions product-description-actions">
		<span class="product-description-actions__quantity">
			<InputNumberStepper on:updateQuantity={updateQuantity} />
		</span>
		<span class="product-description-actions__add-to-cart">
			<Button on:click={addToCart}>
				<img src="/images/icon-cart-white.svg" alt="icon cart" aria-hidden="true" />
				Add to cart
			</Button>
		</span>
	</div>
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;

	.product-description {
		&__surtitle {
			color: var(--clr-accent);
			font-weight: 700;
			font-size: var(--fs-200);
			letter-spacing: 2px;
			text-transform: uppercase;
			margin-bottom: 1.6875rem;
		}

		&__title {
			margin-bottom: 2rem;
		}

		&__description {
			margin-bottom: 1.5rem;
		}

		&__price {
			margin-bottom: 2rem;
		}

		&-actions {
			display: flex;
			flex-direction: var(--action-flex-direction, row);
			justify-content: strecth;
			gap: 1rem;
			&__quantity {
				flex: 1;
			}
			&__add-to-cart {
				flex: var(--add-to-cart-flex, 2);
			}
		}
		@include md-down {
			padding-inline: 24px;
		}
		@include sd-down {
			--action-flex-direction: column;
			--add-to-cart-flex: 1;
		}
	}
</style>

<script lang="ts">
	import type { Product } from '@shared/models/product.model';
	import PromoBadge from './promo-badge.svelte';

	export let product: Product;
</script>

<div class="product-price">
	<span class="product-price__price-with-promo">${product.priceWithPromotion.toFixed(2)}</span>
	<span class="product-price__promo-percent"><PromoBadge promo={product.promotionPercent} /></span>
	<span class="product-price__price">${product.price.toFixed(2)}</span>
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;
	.product-price {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: fit-content;
		gap: 1rem;
		align-items: center;
		&__price-with-promo,
		&__price,
		&__promo-percent {
			line-height: 1;
			font-weight: 700;
		}
		&__price-with-promo {
			font-size: var(--fs-500);
			color: var(--clr-secondary);
		}

		&__price {
			text-decoration: line-through;
			color: #b6bcc8;
		}

		@include md-down {
			grid-template-columns: auto 1fr 2fr;
			width: 100%;

			&__price {
				text-align: right;
			}
		}
	}
</style>

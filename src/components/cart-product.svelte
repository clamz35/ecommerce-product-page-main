<script lang="ts">
	import type { CartProductInterface } from '@shared/models/cart.model';

	export let cartProduct: CartProductInterface;

	const product = cartProduct.product;
</script>

<div class="cart-product">
	<img class="cart-product__image" src="/images/image-product-1-thumbnail.jpg" alt="Product 1" />
	<div>
		<div>{product.name}</div>
		<div>
			${product.priceWithPromotion} x {cartProduct.quantity}
			<span class="cart-product__total">${product.priceWithPromotion * cartProduct.quantity}</span>
		</div>
	</div>
	<img
		class="cart-product__remove"
		src="/images/icon-delete.svg"
		alt="Remove product"
		title="Remove product"
	/>
</div>

<style lang="scss" scoped>
	.cart-product {
		isolation: isolate;

		display: flex;
		align-items: center;
		margin-bottom: 1.6875rem;
		gap: 16px;
		height: 3.125rem;
		width: max-content;
		&__image {
			border-radius: 4px;
			max-height: 100%;
		}

		&__total {
			font-weight: 700;
			color: var(--clr-secondary);
		}
	}
</style>

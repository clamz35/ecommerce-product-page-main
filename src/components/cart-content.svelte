<script>
	import Button from '@shared/components/button.svelte';
	import { cart } from '@stores/cart.store';
	import CartProduct from './cart-product.svelte';
</script>

<div class="cart-content">
	{#if cart.productsQuantity($cart) > 0}
		{#each $cart.products as cartProduct}
			<CartProduct {cartProduct} />
		{/each}
		<Button>Checkout</Button>
	{:else}
		No product
	{/if}
</div>

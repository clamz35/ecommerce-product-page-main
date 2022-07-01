import { Cart, type CartInterface } from '@shared/models/cart.model';
import type { ProductInterface } from '@shared/models/product.model';
import { writable } from 'svelte/store';

function createCart() {
	const { subscribe, set, update } = writable<CartInterface>(new Cart([]));

	return {
		subscribe,
		addToCart: (product: ProductInterface, quantity: number) => {
			update((cart) => {
				const productIndex = cart.products.findIndex((p) => p.product.id === product.id);
				if (productIndex === -1) {
					cart.products.push({
						quantity,
						product,
					});
				} else {
					cart.products[productIndex].quantity += quantity;
				}
				return cart;
			});
		},
		productsQuantity: (cart: CartInterface) => {
			return cart.products.reduce((acc, p) => acc + p.quantity, 0);
		},
		reset: set(new Cart([])),
	};
}

export const cart = createCart();

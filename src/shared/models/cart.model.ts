import type { ProductInterface } from './product.model';

export interface CartProductInterface {
	quantity: number;
	product: ProductInterface;
}

export interface CartInterface {
	products: CartProductInterface[];
}

export class Cart implements CartInterface {
	products: CartProductInterface[];

	constructor(products: CartProductInterface[]) {
		this.products = products;
	}
}

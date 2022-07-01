import type { ProductImageInterface } from './product-image.model';

export interface ProductInterface {
	id: number;
	name: string;
	brand: string;
	price: number;
	images: ProductImageInterface[];
	description: string;
	promotionPercent: number;

	get priceWithPromotion(): number;
}

export class Product implements ProductInterface {
	id: number;
	name: string;
	brand: string;
	price: number;
	images: ProductImageInterface[];
	description: string;
	promotionPercent: number;

	get priceWithPromotion(): number {
		return this.price - (this.price * this.promotionPercent) / 100;
	}

	constructor({
		id,
		name,
		brand,
		price,
		images,
		description,
		promotionPercent = 0,
	}: Omit<ProductInterface, 'priceWithPromotion'>) {
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.price = price;
		this.images = images;
		this.description = description;
		this.promotionPercent = promotionPercent;
	}
}

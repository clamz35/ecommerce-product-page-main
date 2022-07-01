import { ProductImage } from '@shared/models/product-image.model';
import { Product } from '@shared/models/product.model';

export function getProduct() {
	return new Product({
		id: 1,
		name: 'Fall Limited Edition Sneakers',
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
		price: 250,
		images: [
			new ProductImage({
				id: 1,
				src: '/images/image-product-1.jpg',
				thumbnailSrc: '/images/image-product-1-thumbnail.jpg',
			}),
			new ProductImage({
				id: 2,
				src: '/images/image-product-2.jpg',
				thumbnailSrc: '/images/image-product-2-thumbnail.jpg',
			}),
			new ProductImage({
				id: 3,
				src: '/images/image-product-3.jpg',
				thumbnailSrc: '/images/image-product-3-thumbnail.jpg',
			}),
			new ProductImage({
				id: 4,
				src: '/images/image-product-4.jpg',
				thumbnailSrc: '/images/image-product-4-thumbnail.jpg',
			}),
		],
		promotionPercent: 50,
		quantity: 1,
		brand: 'Sneaker company',
	});
}

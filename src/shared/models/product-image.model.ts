export interface ProductImageInterface {
	id: number;
	src: string;
	thumbnailSrc: string;
}

export class ProductImage implements ProductImageInterface {
	id: number;
	src: string;
	thumbnailSrc: string;

	constructor({ id, src, thumbnailSrc: thunbnailSrc }: ProductImageInterface) {
		this.id = id;
		this.src = src;
		this.thumbnailSrc = thunbnailSrc;
	}
}

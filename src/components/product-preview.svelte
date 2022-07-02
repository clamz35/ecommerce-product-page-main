<script lang="ts">
	import Dialog from '@shared/components/dialog.svelte';
	import type { ProductImage } from '@shared/models/product-image.model';
	import type { Product } from '@shared/models/product.model';
	import { media } from '@stores/media-queries.store';

	export let product: Product;
	export let isModal = false;

	let selected = product.images[0];
	let dialogIsVisible = false;
	function onThumbnailClick(image: ProductImage) {
		selected = image;
	}

	function displayPreviousImage() {
		const index = product.images.indexOf(selected);
		if (index > 0) {
			selected = product.images[index - 1];
		} else {
			selected = product.images[product.images.length - 1];
		}
	}

	function displayNextImage() {
		const index = product.images.indexOf(selected);
		if (index < product.images.length - 1) {
			selected = product.images[index + 1];
		} else {
			selected = product.images[0];
		}
	}
</script>

<div class="product-preview">
	{#if dialogIsVisible && $media.lgUp}
		<Dialog bind:visible={dialogIsVisible}>
			<svelte:self {product} isModal={true} />
		</Dialog>
	{/if}
	<div class="product-preview__big">
		<button
			type="button"
			class="btn--unstyled product-preview__nav-btn product-preview__nav-btn-previous"
			class:product-preview__nav-btn--visible={isModal}
			class:product-preview__nav-btn--modal={isModal}
			on:click={displayPreviousImage}
		>
			<img
				src="/images/icon-previous.svg"
				alt="Display previous product preview"
				title="Display previous product preview"
			/>
		</button>
		<img
			on:click={() => (!isModal ? (dialogIsVisible = true) : '')}
			class="product-preview__big-image"
			src={selected.src}
			alt={`Product ${product.name} thumbnail ${selected.id}`}
			title={`Product ${product.name} thumbnail ${selected.id}`}
		/>
		<button
			type="button"
			class="btn--unstyled product-preview__nav-btn product-preview__nav-btn-next"
			class:product-preview__nav-btn--visible={isModal}
			class:product-preview__nav-btn--modal={isModal}
			on:click={displayNextImage}
		>
			<img
				src="/images/icon-next.svg"
				alt="Display next product preview"
				title="Display next product preview"
			/>
		</button>
	</div>
	<div class="product-preview__small">
		{#each product.images as image (image.id)}
			<span
				class={`product-preview__small-image ${
					image.id === selected.id ? 'product-preview__small-image--selected' : ''
				}`}
				on:click={() => onThumbnailClick(image)}
			>
				<img
					src={image.thumbnailSrc}
					alt={`Product ${product.name} thumbnail ${image.id}`}
					title={`Product ${product.name} thumbnail ${image.id}`}
				/>
			</span>
		{/each}
	</div>
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;

	.product-preview {
		display: flex;
		flex-direction: column;
		gap: 32px;
		&__big {
			position: relative;
			&-image {
				width: 100%;
				border-radius: var(--big-image-border-radius, 15px);
			}
		}
		&__nav-btn {
			$navBtnScope: &;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			display: var(--preview-nav-button-display, none);
			place-items: center;
			background: #fff;
			border-radius: 40px;
			width: 40px;
			aspect-ratio: 1;
			&-previous {
				left: 16px;
			}
			&-next {
				right: 16px;
			}

			&--visible {
				display: grid;
			}
			&--modal {
				&#{$navBtnScope}-previous {
					left: -20px;
				}

				&#{$navBtnScope}-next {
					right: -20px;
				}
			}
		}
		&__small {
			display: var(--small-image-display, grid);
			justify-content: space-between;
			grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
			gap: 1rem;
			&-image {
				border-radius: 10px;
				overflow: hidden;
				cursor: pointer;
				transition: border-color 0.2s ease-in-out;
				&::after {
					content: '';
					transition: background-color 0.5s ease;
				}
				&--selected,
				&:hover {
					position: relative;
					border: 2px solid var(--clr-accent);
					&::after {
						position: absolute;
						content: '';
						inset: 0;
						background-color: #ffffff;
						opacity: 0.75;
					}
				}

				img {
					width: 100%;
				}
			}
		}

		@include md-down {
			--big-image-border-radius: 0;
			--small-image-display: none;
			--preview-nav-button-display: grid;
		}
	}
</style>

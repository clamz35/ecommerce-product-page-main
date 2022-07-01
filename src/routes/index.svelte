<script lang="ts">
	import ProductDescription from '@components/product-description.svelte';
	import ProductPreview from '@components/product-preview.svelte';
	import { getProduct } from '@services/product.service';

	const product = getProduct();
</script>

<div class="home">
	<ProductPreview {product} />
	<ProductDescription {product} />
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;
	.home {
		display: flex;
		gap: var(--home-gap, 7.8125rem);
		align-items: var(--home-align-items, center);
		padding: 90px 48px;

		@include md-down {
			--home-gap: 1.5rem;
			--home-align-items: flex-start;
			flex-direction: column;
			padding: 0;
		}
	}
</style>

<script>
	import CartContent from '@components/cart-content.svelte';
	import Popover from '@shared/components/popover.svelte';
	import { cart } from '@stores/cart.store';
	import { popoverOpenState } from '@stores/popover.store';

	let avatarPopoverIsDisplayed = false;
</script>

<div class="header">
	<h1 class="header__title" aria-label="Sneakers"><img src="/images/logo.svg" alt="Sneakers" /></h1>

	<nav class="header__nav">
		<ul class="header__nav-list list--unstyled">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<div class="header__actions">
		<div class="header-actions__cart">
			<button
				type="button"
				class="btn__unstyled header-actions__cart-icon"
				on:click={popoverOpenState.toggle}
			>
				<img src="/images/icon-cart.svg" alt="Your cart" title="Your cart" />
				<span class="header-actions__cart-quantity">{cart.productsQuantity($cart)}</span>
			</button>
			{#if $popoverOpenState}
				<Popover>
					<div slot="header">Cart</div>
					<CartContent />
				</Popover>
			{/if}
		</div>
		<div>
			<img
				class="header__avatar"
				src="/images/image-avatar.png"
				alt="Your account"
				title="Your account"
			/>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	@use 'static/scss/mixins' as *;
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 56px;

		height: var(--header-height, 112px);
		border-bottom: 1px solid #e4e9f2;

		&__title {
			flex: 0;
		}

		&__nav {
			flex: 1;
			@include md-down {
				display: none;
			}
		}
		&__nav-list {
			display: flex;
			align-items: center;
			gap: 32px;

			font-size: var(--fs-300);
		}

		&__nav-list,
		&__actions {
			margin-top: 8px;
		}

		&__actions {
			display: flex;
			align-items: center;
			gap: var(--header-actions-gap, 46px);
		}

		&__avatar {
			height: var(--header-avatar-height, 50px);
			aspect-ratio: 1;
			cursor: pointer;
			border-radius: var(--header-avatar-height, 50px);
			border: 2px solid transparent;
			transition: border-color 0.2s ease-in-out;
			&:hover {
				border: 2px solid var(--clr-accent);
			}
		}

		&-actions {
			&__cart {
				&-icon {
					position: relative;
					cursor: pointer;
				}
				img {
					transition: filter 0.2s ease;
				}
				&:hover {
					img {
						filter: brightness(0.5);
					}
				}
				&-quantity {
					position: absolute;
					top: -5px;
					right: -8px;
					font-size: var(--fs-100);
					font-weight: 700;
					background-color: var(--clr-accent);
					color: var(--clr-accent-contrast);
					width: 19px;
					height: 13px;
					border-radius: 6.5px;
					display: grid;
					place-items: center;
				}
			}
		}

		@include md-down {
			--header-height: 64px;
			--header-avatar-height: 24px;
			--header-actions-gap: 22px;
			padding-inline: 24px;
		}
	}
</style>

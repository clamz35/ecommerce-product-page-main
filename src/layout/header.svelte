<script>
	import CartContent from '@components/cart-content.svelte';
	import Popover from '@shared/components/popover.svelte';
	import { cart } from '@stores/cart.store';
	import { popoverOpenState } from '@stores/popover.store';

	let menuIsOpen = false;
	const toggleMenu = () => {
		menuIsOpen = !menuIsOpen;
	};

	const closeMenu = () => {
		menuIsOpen = false;
	};
</script>

<div class="header">
	<button class="header__menu btn--unstyled" on:click={toggleMenu}>
		<img src="/images/icon-menu.svg" alt="Toggle menu" title="Toggle menu" />
	</button>

	<h1 class="header__title" aria-label="Sneakers"><img src="/images/logo.svg" alt="Sneakers" /></h1>

	<nav class="header__nav" class:header__nav--open={menuIsOpen}>
		<button class="header__nav-close btn--unstyled" on:click={closeMenu}>
			<img src="/images/icon-close.svg" alt="Close menu" title="Close menu" />
		</button>
		<ul class="header__nav-list list--unstyled">
			<li><a href="/collections">Collections</a></li>
			<li><a href="/collections/men">Men</a></li>
			<li><a href="/collection/women">Women</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<div class="header__actions">
		<div class="header-actions__cart">
			<button
				type="button"
				class="btn--unstyled header-actions__cart-icon"
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

		&__menu {
			display: var(--header-menu-icon-display, none);
			img {
				transition: filter 0.2s ease;
			}
			&:hover {
				img {
					filter: brightness(0.5);
				}
			}
		}

		&__title {
			flex: 0;
		}

		&__nav {
			flex: 1;
			display: var(--nav-display, block);
			&-close {
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
			--header-menu-icon-display: inline;
			--nav-display: none;

			&__nav {
				$navScope: &;
				width: min(250px, 100vw);

				flex-direction: column;
				gap: 54px;

				padding: 24px;

				transition: opacity 0.2s ease, left 0.5s ease-in-out;

				position: fixed;
				z-index: 5;
				inset: 0 auto 0 -150%;
				--nav-display: flex;
				opacity: 0;
				background-color: var(--clr-primary-contrast);

				font-weight: 700;
				&,
				a {
					font-size: var(--fs-450);
					color: var(--clr-secondary);
				}
				&-close {
					display: inline;
				}

				&-list {
					flex-direction: column;
					align-items: flex-start;
				}
				&--open {
					opacity: 1;
					inset: 0 auto 0 0;
				}
			}
			padding-inline: 24px;
		}
	}
</style>

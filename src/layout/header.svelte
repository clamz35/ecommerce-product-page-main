<div class="header ep-container">
	<h1 class="header__title" aria-label="Sneakers"><img src="/images/logo.svg" alt="Sneakers" /></h1>

	<nav class="header__nav">
		<ul class="header__nav-list list--unstyled">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>

	<div class="header__actions">
		<img src="/images/icon-cart.svg" alt="Your cart" title="Your cart" />
		<img
			class="header__avatar"
			src="/images/image-avatar.png"
			alt="Your account"
			title="Your account"
		/>
	</div>
</div>

<style lang="scss" scoped>
	.header {
		display: flex;
		align-items: center;
		gap: 56px;

		height: 112px;
		border-bottom: 1px solid #e4e9f2;

		&__title {
			flex: 0;
		}

		&__nav {
			flex: 1;
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
			gap: 46px;
		}

		&__avatar {
			height: 50px;
			aspect-ratio: 1;
		}
	}
</style>

<script lang="ts">
	import Header from '@layout/header.svelte';
	import { popoverOpenState } from '@stores/popover.store';
	import '../../static/scss/styles.scss';
</script>

<svelte:head>
	<title>Ecommerce product page</title>
</svelte:head>

<div class="overlay" class:overlay--visible={$popoverOpenState} on:click={popoverOpenState.close} />
<header class="ep-container">
	<Header />
</header>

<main class="ep-container">
	<slot />
</main>

<style lang="scss" scoped>
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 10;
		display: none;
		&--visible {
			display: block;
		}
	}
</style>

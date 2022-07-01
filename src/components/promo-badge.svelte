<script lang="ts">
	export let promo: number;
</script>

<span class="promo-badge">{promo}%</span>

<style lang="scss" scoped>
	.promo-badge {
		color: var(--clr-accent);
		background-color: var(--clr-accent-300);
		border-radius: 6px;
		padding: 7px 8px;
		line-height: 1;
	}
</style>

import watchMedia from 'svelte-media';

const mediaqueries = {
	sdDown: '(max-width: 599px)',
	mdDown: '(899px)',
	mdUp: '(min-width: 600px)',
	lgDown: '(max-width: 1199px)',
	lgUp: '(min-width: 1200px)',
};

export const media = watchMedia(mediaqueries);

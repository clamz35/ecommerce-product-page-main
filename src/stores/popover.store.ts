import { writable } from 'svelte/store';

function createPopover() {
	const { subscribe, set, update } = writable<boolean>(false);

	return {
		subscribe,
		open: () => {
			update(() => {
				return true;
			});
		},
		close: () => {
			update(() => {
				return false;
			});
		},
		toggle: () => {
			update((popoverIsOpen) => {
				return !popoverIsOpen;
			});
		},
		reset: set(false),
	};
}

export const popoverOpenState = createPopover();

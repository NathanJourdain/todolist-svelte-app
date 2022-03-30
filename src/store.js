import { writable } from 'svelte/store';

export let modalOpenState = writable(false);
export let todos = writable([]);
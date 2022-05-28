import { writable } from 'svelte/store';

export let modalOpenState = writable(false);
export let todos = writable(JSON.parse(localStorage.getItem('todos')) || []);

todos.subscribe(val => {
    localStorage.setItem('todos', JSON.stringify(val));
})
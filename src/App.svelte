<script>
    import {modalOpenState, todos} from './store';
 
    import ModalAddTodo from "./components/ModalAddTodo.svelte";
    import TodosList from './components/TodosList.svelte';
    import Button from './components/Button.svelte';

    const openModal = () => modalOpenState.update(state => state = true);



</script>


<main>
    <h1>Todo List App</h1>
    
    <Button type="button" handleClick={openModal} text="Ajouter une tâche" />

    <TodosList/>
</main>




<ModalAddTodo />

<style>
    main{
        max-width: 900px;
        margin: auto;
    }
    h1{
        color: var(--main-color);
        text-transform: uppercase;
        background-color: var(--secondary-color);
        padding: 10px;
        margin-bottom: 20px;
    }
</style>
<script>
    import {todos} from '../store';
    import TodoComponent from './TodoComponent.svelte';
    
    // Récupération des todos
    let todosList = [];
    todos.subscribe(t => todosList = t);

</script>

<section>
    <h2>Tes tâches</h2>

    {#if todosList.length == 0}
        <p>Tu n'as aucune tâche pour le moment...</p>
    {:else}
        {#each todosList as todo}
            <TodoComponent todo={todo}/>
        {/each}
    {/if}
</section>


<style>
    h2{
        color: var(--main-color);
        text-transform: uppercase;
        background-color: var(--secondary-color);
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        width: max-content;
    }
    p{
        font-size: 18px;
        font-style: italic;
    }
</style>

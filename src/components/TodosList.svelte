<script>
    import {todos} from '../store';
    import TodoComponent from './TodoComponent.svelte';
    
    // Récupération des todos
    let todosList = [];
    todos.subscribe(t => todosList = t);

    $: todosNotCompleted = todosList.filter(el => el.completed == false);
    $: todosCompleted = todosList.filter(el => el.completed == true);

</script>

<section>
    <h2>Tes tâches en cours</h2>

    {#if todosNotCompleted.length == 0}
        <p>Tu n'as aucune tâche en cours pour le moment...</p>
    {:else}
        {#each todosNotCompleted as todo (todo.id)}
            <TodoComponent todo={todo}/>
        {/each}
    {/if}
</section>
<section>
    <h2>Tes tâches terminés</h2>
    {#if todosCompleted.length == 0}
        <p>Tu as terminé aucune tâche pour le moment...</p>
    {:else}
        {#each todosCompleted as todo (todo.id)}
            <TodoComponent todo={todo}/>
        {/each}
    {/if}
</section>


<style>
    section:not(:first-of-type){
        margin-top: 50px;
    }
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

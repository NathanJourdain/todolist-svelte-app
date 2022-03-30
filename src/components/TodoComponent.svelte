<script>
    export let todo;

    const handleClick = () => {
        todo.completed = !todo.completed;
    }
</script>

<div class="{todo.completed ? "complete" : ""}">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
        {#if todo.completed} <input type="checkbox" on:click="{handleClick}" checked>
        {:else} <input type="checkbox" on:click="{handleClick}">
        {/if}
        <span class="custom-checkbox"></span>
    </label>
    <p>{todo.content}</p>
</div>

<style>
    div{
        padding: 10px 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid var(--main-color);
    }
    div.complete{
        background-color: var(--secondary-color);
    }


    p{
        font-size: 18px;
        color: var(--color-text);
    }
    
    
    /* Checkbox custom*/
    label{
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
    input{
        display: none;
    }
    .custom-checkbox{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: var(--secondary-color);
        border: 1px solid var(--main-color);
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }
    .custom-checkbox::after{
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--main-color);
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: center;
        transform: scale(0);

        transition: transform 0.1s;
    }
    input:checked + .custom-checkbox::after{
        transform: scale(1);
    }

    /* Todo completed style */
    div.complete p{
        position: relative;
    }
    div.complete p::after{
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        position: absolute;
        top: calc(55%);
        left: 0;
        background-color: var(--main-color);
        transition: width 10s;
    }


</style>
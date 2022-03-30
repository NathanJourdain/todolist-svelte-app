<script>
    export let handleClick;
    export let type;
    export let text;
</script>

<button type={type} on:click="{handleClick}">{text}</button>


<style>
    button{
        cursor: pointer;
        background-color: var(--secondary-color);
        color: var(--color-text);
        text-transform: uppercase;
        font-weight: bold;
        border: 1px solid var(--main-color);
        display: block;
        margin: auto;
        padding: 10px;
        transition: all 0.1s;
    }
    button:hover{
        background-color: var(--main-color);
        color: #fff;
    }
</style>
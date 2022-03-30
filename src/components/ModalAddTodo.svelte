<script>
    import { modalOpenState, todos } from '../store.js';
    import Button from './Button.svelte';

    // Etat d'ouverture / fermeture de la modal
    let open;
    modalOpenState.subscribe(state => open = state);
    

    const changeState = () => modalOpenState.update(state => !state);

    // Objet qui stocke les informations
    let content;

    // Enregistrement des données
    const handleSubmit = () => {
        todos.update(list => {
            list.push({content: content, completed: false});
            content = "";
            return list;
        });
        changeState();
    }

</script>

<section class="{open ? 'modal' : 'modal hidden'}">
    <div class="overlay" on:click="{changeState}"></div>
    <div class="content">
        <span class="close" title="Fermer la modal" on:click="{changeState}"></span>
        <h2>Ajout d'une tâche</h2>
        <form on:submit|preventDefault="{handleSubmit}">
            <input type="text" bind:value={content} placeholder="La tâche" required>
            <Button type="submit" handleClick="" text="Ajouter"/>
        </form>
    </div>
</section>



<style>
    section.hidden{
        display: none;
    }

    .modal{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute; 
        background-color: rgba(0,0,0, 0.3);
    }
    .content{
        z-index: 1;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        min-width: 300px;
        border: 3px solid var(--main-color);
        position: relative;
    }
    h2{
        margin-bottom: 10px;
    }

    input:focus{
        outline: 2px solid var(--main-color);
    }

    .close{
        position: absolute;
        display: inline-block;
        top: -20px;
        right: -20px;
        width: 40px;
        height: 40px;
        background: var(--main-color);
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
    }
    .close::before, .close::after{
        content: '';
        width: 80%;
        height: 3px;
        border-radius: 3px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
    }
    .close::before{
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .close::after{
        transform: translate(-50%,-50%) rotate(-45deg);
    }
</style>
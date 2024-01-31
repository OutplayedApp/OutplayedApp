<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ users } = data)
</script>

<div>
    {#each users as user}
        <div>{user.name}</div>
    {/each}
</div>
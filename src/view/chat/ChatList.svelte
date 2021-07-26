<script>
  import ChatEntry from "./ChatEntry.svelte";

  export let chats = [];
</script>

<div>
  {#each chats as chat}
    <ChatEntry {chat} />
  {/each}
</div>

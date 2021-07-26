<script>
  import ChatEntry from "./ChatEntry.svelte";

  export let chats = [];
  const MAX_LENGTH = 50;

  $: if (chats.length > MAX_LENGTH) {
    chats = chats.slice(chats.length - MAX_LENGTH);
  }
</script>

<div class="list">
  {#each chats as chat}
    <ChatEntry {chat} />
  {/each}
</div>

<style lang="scss">
  .list {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
  }
</style>

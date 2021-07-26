<script>
  import ChatEntry from "./ChatEntry.svelte";

  export let chats = [];
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
  }
</style>

<script lang="ts">
  import ChatPage from "./view/chat/ChatPage.svelte";
  import InvalidSecretKeyErrorPage from "./view/error/InvalidSecretKeyErrorPage.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const secretKey: string | null = urlParams.get("key") || null;
</script>

<main>
  {#if secretKey}
    <ChatPage key={secretKey} />
  {:else}
    <InvalidSecretKeyErrorPage />
  {/if}
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>

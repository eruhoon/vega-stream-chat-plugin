<script lang="ts">
  import ChatPage from "./chat/ChatPage.svelte";
  import InvalidSecretKeyErrorPage from "./error/InvalidSecretKeyErrorPage.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const secretKey: string | null = urlParams.get("key") || null;
</script>

<main>
  {#if secretKey}
    <ChatPage />
  {:else}
    <InvalidSecretKeyErrorPage />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import ChatList from "./chat/ChatList.svelte";
  import InvalidSecretKeyErrorPage from "./error/InvalidSecretKeyErrorPage.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const secretKey: string | null = urlParams.get("key") || null;
</script>

<main>
  {#if secretKey}
    <ChatList />
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

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

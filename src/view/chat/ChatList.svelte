<script>
  import ChatEntry from "./ChatEntry.svelte";

  const chats = [
    { nickname: "user1", message: "chat1" },
    { nickname: "user2", message: "chat2" },
  ];
</script>

<div>
  {#each chats as chat}
    <ChatEntry nickname={chat.nickname} message={chat.message} />
  {/each}
</div>

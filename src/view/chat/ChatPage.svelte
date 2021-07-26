<script lang="ts">
  import { WebSocketChatNetwork } from "../../model/websocket/WebSocketChatNetwork";
  import ChatList from "./ChatList.svelte";

  export let key: string;
  const prop = {
    chats: [],
  };
  const MAX_LENGTH = 50;

  const network = new WebSocketChatNetwork("wss://mycast.xyz:8002", key);
  network.addOnChatListener((chat) => (prop.chats = [...prop.chats, chat]));
  network.addOnChatsLoadListener((chats) => (prop.chats = chats));
</script>

<main>
  <ChatList chats={prop.chats} />
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
  }
</style>

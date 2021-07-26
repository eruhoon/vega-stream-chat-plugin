<script lang="ts">
  import { WebSocketChatNetwork } from "../../model/websocket/WebSocketChatNetwork";
  import ChatList from "./ChatList.svelte";

  const prop = {
    chats: [],
  };

  const network = new WebSocketChatNetwork("wss://mycast.xyz:8002");
  network.addOnChatListener((chat) => {
    console.log("onChat", chat);
  });
  network.addOnChatsLoadListener((chats) => {
    console.log("onChatsLoad", chats);
    prop.chats = chats;
  });
</script>

<ChatList chats={prop.chats} />

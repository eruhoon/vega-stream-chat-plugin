<script lang="ts">
  import { ChatNetwork } from "../../model/network/ChatNetwork";
  import { WebSocketChatNetwork } from "../../model/websocket/WebSocketChatNetwork";
  import ChatList from "./ChatList.svelte";

  const network: ChatNetwork = new WebSocketChatNetwork(
    "wss://mycast.xyz:8002"
  );
  network.addOnChatListener((chat) => {
    console.log("onChat", chat);
  });
  network.addOnChatsLoadListener((chats) => {
    console.log("onChatsLoad", chats);
  });
</script>

<ChatList />

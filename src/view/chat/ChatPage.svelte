<script lang="ts">
  import { ChatNetwork } from "../../model/network/ChatNetwork";
  import { WebSocketChatNetwork } from "../../model/websocket/WebSocketChatNetwork";
  import ChatList from "./ChatList.svelte";

  const network: ChatNetwork = new WebSocketChatNetwork();
  network.addOnChatListener((chat) => {
    console.log("onChat", chat);
  });
  network.addOnChatsLoadListener((chats) => {
    console.log("onChatsLoad", chats);
  });
</script>

<ChatList />

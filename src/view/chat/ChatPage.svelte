<script lang="ts">
  import { WebSocketChatNetwork } from "../../model/websocket/WebSocketChatNetwork";
  import ChatList from "./ChatList.svelte";

  export let key: string;
  const prop = {
    chats: [],
  };

  const network = new WebSocketChatNetwork("wss://mycast.xyz:8002", key);
  network.addOnChatListener((chat) => {
    console.log("onChat", chat);
    prop.chats = [...prop.chats, chat];
  });
  network.addOnChatsLoadListener((chats) => {
    console.log("onChatsLoad", chats);
    prop.chats = chats;
  });
</script>

<ChatList chats={prop.chats} />

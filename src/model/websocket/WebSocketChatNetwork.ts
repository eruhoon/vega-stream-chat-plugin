import { ChatNetwork } from "../network/ChatNetwork";

export class WebSocketChatNetwork extends ChatNetwork {
  #socket: WebSocket;

  constructor(host: string) {
    super();
    this.#socket = this.#createSocket(host);
  }

  #createSocket(host: string): WebSocket {
    const socket = new WebSocket(host);
    socket.onopen = () => this.#onOpenSocket();
    socket.onmessage = (event) => this.#onRawMessage(event);
    socket.onclose = () => this.onClose();
    return socket;
  }

  #onOpenSocket(): void {
    console.log("open");
    this.#socket.send(
      JSON.stringify({
        commandType: "viewer-login",
        resource: {
          channel: "CHAT",
          secretKey: "ttt",
        },
      })
    );
  }

  #onRawMessage(messageEvent: MessageEvent<any>): void {
    const message = JSON.parse(messageEvent.data);
    switch (message.commandType) {
      case "applyCurrentChatList":
        this.notifyChatsLoad(message.response);
        return;
    }
  }

  onClose(): void {
    console.log("closed");
  }
}

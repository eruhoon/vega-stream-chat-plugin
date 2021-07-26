import { ChatNetwork } from "../network/ChatNetwork";

export class WebSocketChatNetwork extends ChatNetwork {
  #socket: WebSocket;
  #secretKey: string;

  constructor(host: string, secretkey: string) {
    super();
    this.#secretKey = secretkey;
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
          channel: "chat",
          secretKey: this.#secretKey,
        },
      })
    );
  }

  #onRawMessage(messageEvent: MessageEvent<any>): void {
    const message = JSON.parse(messageEvent.data);
    switch (message.commandType) {
      case "applyCurrentChatList":
        this.notifyChatsLoad(message.response);
        break;
      case "chat":
        this.notifyChat(message.response);
        break;
      default:
        console.log("not implemented");
    }
  }

  onClose(): void {
    console.log("closed");
  }
}

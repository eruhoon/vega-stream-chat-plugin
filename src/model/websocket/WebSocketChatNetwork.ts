import { ChatNetwork } from "../network/ChatNetwork";

export class WebSocketChatNetwork extends ChatNetwork {
  #socket: WebSocket;

  constructor(host: string) {
    super();
    this.#socket = this.#createSocket(host);
  }

  #createSocket(host: string): WebSocket {
    const socket = new WebSocket(host);
    // socket.onopen = () => this.onOpenSocket();
    // socket.onmessage = (message) => this.onRawMessage(message);
    // socket.onclose = () => this.onClose();
    return socket;
  }
}

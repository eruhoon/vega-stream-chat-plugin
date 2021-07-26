export abstract class ChatNetwork {
  #onChatsLoadListeners: OnChatsLoadListener[] = [];
  #onChatListeners: OnChatListener[] = [];

  addOnChatsLoadListener(listener: OnChatsLoadListener): void {
    if (!this.#onChatsLoadListeners.find((l) => l === listener)) {
      this.#onChatsLoadListeners.push(listener);
    }
  }

  removeOnChatsLoadListener(listener: OnChatsLoadListener): void {
    this.#onChatListeners = this.#onChatListeners.filter((l) => l !== listener);
  }

  clearOnChatsLoadListener(): void {
    this.#onChatsLoadListeners = [];
  }

  notifyChatsLoad(chats: Chat[]): void {
    this.#onChatsLoadListeners.forEach((listener) => listener(chats));
  }

  addOnChatListener(listener: OnChatListener): void {
    if (!this.#onChatListeners.find((l) => l === listener)) {
      this.#onChatListeners.push(listener);
    }
  }

  removeOnChatListener(listener: OnChatListener): void {
    this.#onChatListeners = this.#onChatListeners.filter((l) => l !== listener);
  }

  clearOnChatListener(): void {
    this.#onChatListeners = [];
  }

  notifyChat(chat: Chat): void {
    this.#onChatListeners.forEach((listener) => listener(chat));
  }
}

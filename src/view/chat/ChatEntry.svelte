<script lang="ts">
  export let chat: Chat | null = null;
</script>

<div>
  <img src={chat?.icon} />
  <span>{chat?.nickname} : {chat?.msg.response}</span>
</div>

<style>
  img {
    width: 30px;
    height: 30px;
  }
</style>

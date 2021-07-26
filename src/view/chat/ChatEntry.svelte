<script lang="ts">
  export let chat: Chat | null = null;
</script>

<div>
  <img src={chat?.icon} alt="icon" />
  <span>{chat?.nickname} : {chat?.msg.response}</span>
</div>

<style lang="scss">
  img {
    width: 30px;
    height: 30px;
  }
</style>

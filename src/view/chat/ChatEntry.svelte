<script lang="ts">
  export let chat: Chat;
</script>

<div class="chatEnty">
  <img class="chatImg" src={chat.icon} alt="icon" />
  <span class="chatTxt">
    <p class="nickname">{chat.nickname}</p>
    <p class="divide">:</p>
    <p class="msg">{chat.msg.response}</p>
  </span>
</div>

<style lang="scss">
  @use './preset/ChatDefBlackBox.scss';
</style>

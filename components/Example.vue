<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Enter your username: <input v-model="username">
    <div
      v-if="error"
      class="error"
    >
      Please enter a username with at least seven letters.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Example',

    data() {
      return {
        message: 'Hello world!',
        username: ''
      };
    },

    computed: {
      error() {
        return this.username.trim().length < 7;
      }
    }
  };
</script>

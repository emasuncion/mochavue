<template>
  <div>
    <button v-show="loggedIn" class="btn">
      Logout
    </button>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        loggedIn: true
      };
    },
    mounted() {
      this.func1();
    },
    methods: {
      func1() {
        this.func2();
      },
      func2() {
        // eslint-disable-next-line
        console.log('this is to test');
      }
    }
  };
</script>

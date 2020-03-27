 <template>
  <div>
    <button class="btn" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
   this.func1();
  },
  methods: {
    func1() {
      func2();
    },
    func2() {
      console.log('this is to test');
    }
  }
}
</script>

<template>
  <div>
    <First />
    <Second />
  </div>
</template>

<script>
  import First from '@/components/Example.vue';
  import Second from '@/components/SecondExample.vue';

  export default {
    components: {First, Second}
  }
</script>

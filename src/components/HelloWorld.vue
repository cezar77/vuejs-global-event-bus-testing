<template>
  <div>
    <h1>Hello World, I'm {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Foo',
    };
  },
  created() {
    this.$eventBus.$on('change-name', this.changeName);
  },
  beforeDestroy() {
    this.$eventBus.$off('change-name');
  },
  methods: {
    changeName(name) {
      this.name = name;
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <div>
    <input type="text" v-model="newName">
    <button @click.prevent="changeName()">Change name</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeName',
  data() {
    return {
      newName: '',
    };
  },
  methods: {
    changeName() {
      this.$eventBus.$emit('change-name', this.newName);
    },
  },
};
</script>

<style scoped>
</style>

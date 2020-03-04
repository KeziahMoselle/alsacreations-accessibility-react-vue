<template>
  <section :id="`tabpanel-${id}`" v-show="isActive" :aria-labelledby="id" role="tabpanel">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Tab",
  props: {
    name: {
      required: true
    },
    isSelected: {
      default: false
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    href() {
      return "#" + this.id;
    },
    id() {
      return this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  mounted() {
    this.isActive = this.isSelected;
  }
};
</script>

<style>
</style>

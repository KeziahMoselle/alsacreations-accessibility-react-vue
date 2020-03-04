<template>
  <div class="tabs">
    <ul role="tablist" @keydown="handleKeyboard">
      <li :class="{ active: tab.isActive }" v-for="tab in tabs" :key="tab._uid">
        <a
          role="tab"
          :href="tab.href"
          :id="tab.id"
          :aria-selected="`${tab.isActive}`"
          :aria-controls="`tabpanel-${tab.id}`"
          :tabindex="tab.isActive ? '-1' : '0'"
          @click="selectTab(tab)"
        >{{ tab.name }}</a>
      </li>
    </ul>

    <div role="tabpanel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      tabs: [],
      currentIndex: null
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      // Update isActive state on click
      this.tabs.forEach(tab => {
        if (tab.name === selectedTab.name) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    },
    handleKeyboard(event) {
      if (event.key === "Tab") return;

      // Go to the left
      if (event.key === "ArrowLeft") {
        const nextIndex = this.currentIndex - 1;
        if (nextIndex < 0) return;
        this.currentIndex = nextIndex;
      }

      // Go to the right
      if (event.key === "ArrowRight") {
        const nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.tabs.length) return;
        this.currentIndex = nextIndex;
      }

      this.selectTab(this.tabs[this.currentIndex], true);
    }
  },
  mounted() {
    // Initialize the current tab index on mounted
    this.tabs.forEach((tab, index) => {
      if (tab.isActive) return (this.currentIndex = index);
    });
  }
};
</script>

<style>
</style>

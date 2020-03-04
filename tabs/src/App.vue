<template>
  <tabs>
    <tab name="Planning" :isSelected="true">
      <h2>Planning</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit alias a veritatis dolor voluptas. Hic, facilis! Illum facilis dolorum nisi eum cumque magnam consequuntur iste libero laborum, omnis voluptatem!</p>
    </tab>

    <tab name="Feedback">
      <h2>Feedback</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit alias a veritatis dolor voluptas. Hic, facilis! Illum facilis dolorum nisi eum cumque magnam consequuntur iste libero laborum, omnis voluptatem!</p>
    </tab>

    <tab name="Retrospective">
      <h2>Retrospective</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reprehenderit alias a veritatis dolor voluptas. Hic, facilis! Illum facilis dolorum nisi eum cumque magnam consequuntur iste libero laborum, omnis voluptatem!</p>
    </tab>
  </tabs>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";

export default {
  name: "App",
  components: {
    Tabs,
    Tab
  }
};
</script>

<template>
  <div class="base-layout">
    <BaseHeader />
    <main>
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from "./baseFooter.vue";
import BaseHeader from "./baseHeader.vue";

export default {
  name: "BaseLayout",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
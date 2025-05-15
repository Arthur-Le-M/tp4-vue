<template>
  <base-button :disabled="isPending" :color="color" @click="handleClick">
    <font-awesome-icon v-if="isPending" :icon="['fas', 'circle-notch']" pulse />
    <slot />
  </base-button>
</template>

<script>
import BaseButton from "./baseButton.vue";

export default {
  name: "AsyncButton",
  components: { BaseButton },
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {
      isPending: false,
    };
  },
  methods: {
    handleClick() {
      const originalOnClick = /** @type {() => Promise<void>} */ (
        this.$attrs.onClick
      );
      if (!originalOnClick) return;

      this.isPending = true;

      originalOnClick().finally(() => {
        this.isPending = false;
      });
    },
  },
};
</script>
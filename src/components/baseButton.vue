<template>
    <button
    :class="['base-button', color]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
    
</template>


<script>
export default {
  name: "BaseButton",
  components: {},
  props: {
    color: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="css">
.base-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  margin-top: 10px;
}

.base-button:hover {
  background-color: #053b74;
  transition: background-color 0.3s ease;
}

.default {
  background-color: #035cbb;
}

.primary {
  background-color: #11cc78;
  color: white;
}

.secondary {
  background-color: #1c2b3c;
  color: white;
}

.danger {
  background-color: #9d1f11;
  color: white;
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
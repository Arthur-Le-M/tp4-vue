<template>
  <BaseLayout>
    <router-view></router-view>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./components/baseLayout.vue";

export default {
  name: "App",
  components: {
    BaseLayout,
  },
};
</script>

<style>
/* Add global styles here, font unbuntu from google */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
body {
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}
</style>
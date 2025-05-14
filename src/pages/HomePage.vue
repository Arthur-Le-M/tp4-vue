<template>
  <div class="home-page">
    <h1>Welcome to the Home Page</h1>
    <p>This is a simple home page component.</p>
    <BaseButton>Click Me!</BaseButton>
    <BaseButton disabled>Disabled Button</BaseButton>
    <BaseButton color="secondary">Secondary Button</BaseButton>
    <BaseButton color="danger">Danger Button</BaseButton>  
    <AsyncButton @click="handleAsyncClick">Async Button</AsyncButton>
    <AsyncButton color="secondary" @click="handleAsyncClick2">Wait {{ this.count }} secondes</AsyncButton>
    <SigninButton />
  </div>
</template>

<script>
import AsyncButton from "../components/asyncButton.vue";
import BaseButton from "../components/baseButton.vue";
import SigninButton from "../components/SigninButton.vue";

export default {
  name: "HomePage",
  components: {
    BaseButton,
    AsyncButton,
    SigninButton,
  },
  data() {
  return {
    isPending: false,
    count: 1,
    };
  },
  methods: {
    handleAsyncClick() {
      // Simule une action asynchrone (ex. appel API)
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Action async terminée 🎉")
          resolve();
        }, 2000);
      });
    },
    handleAsyncClick2() {
        
        return new Promise((resolve) => {
            setTimeout(() => {
            this.count++;
            resolve();
            }, this.count * 1000);
        });
    },
  },
};
</script>

<style scoped lang="css">
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
}
</style>
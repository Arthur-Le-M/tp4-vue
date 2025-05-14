

<template>
    <div>
    <baseButton
      v-if="!userStore.isAuthenticated"
      @click="handleSignIn"
      :disabled="userStore.isLoading"
    >
      {{ userStore.isLoading ? "Connexion..." : "Se connecter" }}
    </baseButton>
    <baseButton v-else @click="handleSignOut">Se déconnecter</baseButton>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import baseButton from "./baseButton.vue";

export default {
  name: "SigninButton",
  components: {
    baseButton,
  },
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    async handleSignIn() {
      try {
        await this.userStore.signIn();
      } catch (err) {
        console.error("Erreur durant la connexion :", err);
      }
    },
    handleSignOut() {
      this.userStore.signOut();
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>


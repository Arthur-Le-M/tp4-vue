<template>
    <div class="base-header">
        <header>
        <h1>My Application</h1>
        <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li v-if="userStore.isAuthenticated">
            <router-link to="/conversations">Conversations</router-link>
            </li>
            <li v-if="userStore.user">
            <a href="#contact">{{
              userStore.user.name || userStore.user.username
            }}</a>
          </li>
            </ul>
        </nav>
        </header>
    </div>
</template>


<script>
import { useUserStore } from "@/store/user";

export default {
    name: "BaseHeader",
  components: {},
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
};
</script>

<style scoped lang="css">
.base-header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

.base-header header {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.base-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.base-header nav ul li {
    margin: 0 15px;
}

.base-header nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

</style>
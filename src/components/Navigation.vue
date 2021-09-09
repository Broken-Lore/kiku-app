<template>
<div>
  <ul class="navbar">
    <li class="home">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        Home</router-link
      >
    </li>

    <template v-if="authenticated">
      <li>Welcome, {{ user.name }}!</li>
      <li>
        <router-link
          :to="{
            name: 'Dashboard',
          }"
        >
          Dashboard</router-link
        >
      </li>
      <li>
        <a href="#" @click.prevent="signOut">
          Sign Out
        </a>
      </li>
    </template>
    <template v-else>
      <li>
        <router-link
          :to="{
            name: 'Register',
          }"
        >
          Register</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            name: 'SignIn',
          }"
        >
          Sign In</router-link
        >
      </li>
    </template>
  </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Home",
        });
      });
    },
  },
};
</script>

<style scoped>
.navbar{
    font-family: 'Amatic SC', cursive,40px;
    position:absolute;
    display:flex;
    justify-content: space-between;
    flex-direction: row;

}


</style>

<template>
<div>
  <ul class="navbar">
    <ul>
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        Home</router-link
      >
    </ul>

    <template v-if="authenticated">
      <ul>Welcome, {{ user.name }}!</ul>
      <ul>
        <router-link
          :to="{
            name: 'Dashboard',
          }"
        >
          Dashboard</router-link
        >
      </ul>
      <ul>
        <a href="#" @click.prevent="signOut">
          Sign Out
        </a>
      </ul>
    </template>
    <template v-else>
      <ul class="nav">
        <router-link
          :to="{
            name: 'Register',
          }"
        >
          Register</router-link
        >
      </ul>
      <ul>
        <router-link
          :to="{
            name: 'SignIn',
          }"
        >
          Sign In</router-link
        >
      </ul>
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
    font-family: 'Amatic SC', cursive;
    position:absolute;
    flex-direction: row;
    font-size:12px ;
    text-decoration-color: aliceblue !important;
    color: aliceblue;
}
a {
  color: #FFF;
  text-decoration: none;
}



</style>

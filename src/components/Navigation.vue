<template>
   <ul>
       <li>
           <router-link 
           :to="{
               name: 'Home'
               }">
           Home</router-link>
       </li>
       
       <template v-if="authenticated">
       <li>  {{ user.name }} {{ authenticated }} </li>
       <li>
           <router-link 
           :to="{
               name: 'Dashboard'
               }">
           Dashboard</router-link>
       </li>
       <li>
           <a href="#">
           Sign Out
           </a>
       </li>
       </template>
       <template v-else>
 <li>
           <router-link 
           :to="{
               name: 'Register'
               }">
           Register</router-link>
       </li>
        <li>
           <router-link 
           :to="{
               name: 'SignIn'
               }">
           Sign In</router-link>
       </li>
       </template>
   </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    }

}
</script>
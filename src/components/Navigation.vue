<template>
   <ul>
       <li>
           <router-link 
           :to="{
               name: 'Home'
               }">
           Home</router-link>
       </li>
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
       <li>Joan Recordà Pellicer</li>
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
   </ul>
</template>
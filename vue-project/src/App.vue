<script setup>
import { RouterLink } from 'vue-router'

</script>



<template>

  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Create">Create</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView />

</template>





<!-- <template>

  <RouterView />
</template> -->

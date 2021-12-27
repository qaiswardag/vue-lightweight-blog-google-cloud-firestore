<template>
  <header>
    <router-link :to="{name: 'Home'}">
      <div class="logo">The Blog</div>
    </router-link>
    <nav id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'Create'}">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

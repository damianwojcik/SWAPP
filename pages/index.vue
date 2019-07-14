<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">Nuxt.js</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.films) {
      this.$store.dispatch('fetchFilms');
    }
  },
};
</script>

<style>
</style>

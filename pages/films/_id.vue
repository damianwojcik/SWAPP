<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Film:</h1>
        <h2 class="subtitle">{{film.title}}</h2>
        <h3>Data:</h3>
        <table class="table">
          <tbody>
            <tr v-for="(item, name, index) in film" :key="index">
              <td>{{name}}</td>
              <td>{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (!store.state.films) {
      await store.dispatch('fetchFilms');
    }
  },
  computed: {
    film() {
      const title = this.$route.params.id.replace(/-/g, ' ');
      return this.$store.getters.getFilmByTitle(title);
    },
  },
};
</script>

<style>
</style>

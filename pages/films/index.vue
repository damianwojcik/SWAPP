<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
        <div v-for="film in films" :key="film.episode_id">
          <nuxt-link
            :to="{ path: `${film.title.replace(/\s+/g,'-')}` }"
            class="navbar-item"
            append
          >{{film.title}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  async fetch({ store }) {
    if (!store.state.films) {
      await store.dispatch('fetchFilms');
    }
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
  },
  data() {
    return {
      title: 'Films',
    };
  },
};
</script>

<style>
</style>

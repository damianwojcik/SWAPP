<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
        <div v-for="(person, index) in people" :key="index">
          <nuxt-link
            :to="{ path: `${person.name.replace(/\s+/g, '_').toLowerCase()}` }"
            append
          >{{person.name}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  async fetch({ store }) {
    if (!store.state.people) {
      await store.dispatch('fetchPeople');
    }
  },
  computed: {
    people() {
      return this.$store.state.people;
    },
  },
  data() {
    return {
      title: 'People',
    };
  },
};
</script>

<style>
</style>

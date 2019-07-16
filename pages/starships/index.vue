<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
        <div v-for="(item, index) in data" :key="index">
          <nuxt-link
            :to="{ path: `${item.name.replace(/\s+/g, '_').toLowerCase()}` }"
            append
          >{{item.name}}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    data() {
      return this.$store.state.starships;
    },
  },
  data() {
    return {
      title: 'Starships',
    };
  },
};
</script>

<style>
</style>

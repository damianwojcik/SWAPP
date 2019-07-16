<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
        <div v-for="(item, index) in data" :key="index">
          <nuxt-link
            :to="{ path: `${item.title.replace(/\s+/g, '_').toLowerCase()}` }"
            append
          >{{item.title}}</nuxt-link>
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
      return this.$store.state.data.films;
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

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
        <span v-for="film in films" :key="film.episode_id">{{ film.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData() {
    let { data } = await axios.get(`https://swapi.co/api/films/`);
    return { films: data.results };
  },
  data() {
    return {
      title: 'Films',
    };
  },
};
</script>

<style>
span {
  display: block;
}
</style>

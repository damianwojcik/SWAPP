<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Film:</h1>
        <h2 class="subtitle">{{film.title}}</h2>
        <table class="table">
          <tbody>
            <tr v-for="(item, name, index) in film" :key="index">
              <td>{{name}}</td>
              <td v-if="name === 'characters'">
                <div v-for="(nestedItem, nestedIndex) in item" :key="nestedIndex">
                  <nuxt-link
                    :to="{ path: `/people/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
                  >{{nestedItem}}</nuxt-link>
                </div>
              </td>
              <td v-else>{{item}}</td>
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
    if (!store.state.people) {
      await store.dispatch('fetchPeople');
    }
    if (!store.state.films) {
      await store.dispatch('fetchFilms');
    }
  },
  computed: {
    film() {
      const title = this.$route.params.id.replace(/_/g, ' ');
      return this.$store.getters.getFilmByTitle(title);
    },
  },
};
</script>

<style>
</style>

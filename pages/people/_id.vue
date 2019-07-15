<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Character:</h1>
        <h2 class="subtitle">{{person.name}}</h2>
        <table class="table">
          <tbody>
            <tr v-for="(item, name, index) in person" :key="index">
              <td>{{name}}</td>
              <td v-if="name === 'films'">
                <div v-for="(nestedItem, nestedIndex) in item" :key="nestedIndex">
                  <nuxt-link
                    :to="{ path: `/films/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
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
  },
  computed: {
    person() {
      const name = this.$route.params.id.replace(/_/g, ' ');
      return this.$store.getters.getPersonByName(name);
    },
  },
};
</script>

<style>
</style>

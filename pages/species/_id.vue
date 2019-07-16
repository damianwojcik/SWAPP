<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Specie:</h1>
        <h2 class="subtitle">{{data.name}}</h2>
        <table class="table">
          <tbody>
            <tr v-for="(item, name, index) in data" :key="index">
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
  computed: {
    data() {
      const name = this.$route.params.id.replace(/_/g, ' ');
      return this.$store.getters.getSpecieByName(name);
    },
  },
};
</script>

<style>
</style>

<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Film:</h1>
        <h2 class="subtitle">{{data.title}}</h2>
        <table class="table">
          <tbody>
            <tr v-for="(item, name, index) in data" :key="index">
              <td>{{name}}</td>
              <td v-if="Array.isArray(item)">
                <div v-for="(nestedItem, nestedName, nestedIndex) in item" :key="nestedIndex">
                  <nuxt-link
                    :to="{ path: `/${name}/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
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
      const title = this.$route.params.id.replace(/_/g, ' ');
      return this.$store.getters.getFilmByTitle(title);
    },
  },
};
</script>

<style>
</style>

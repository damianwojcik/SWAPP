<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Film:</h1>
        <h2 class="subtitle">{{data.title}}</h2>
        <Table :data="data" />
      </div>
    </div>
  </section>
</template>

<script>
import Table from '@/components/Table';

export default {
  components: {
    Table,
  },
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

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
  async asyncData({ params, store }) {
    const title = params.id.replace(/_/g, ' ');
    const data = await store.getters.getFilmByTitle(title);
    return { data };
  },
  components: {
    Table,
  },
};
</script>

<style>
</style>

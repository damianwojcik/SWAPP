<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Vehicle:</h1>
        <h2 class="subtitle">{{data.name}}</h2>
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
      const name = this.$route.params.id.replace(/__/g, '/').replace(/_/g, ' ');
      return this.$store.getters.getVehicleByName(name);
    },
  },
};
</script>

<style>
</style>

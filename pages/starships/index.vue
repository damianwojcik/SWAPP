<template>
  <section class="section">
    <div class="container">
      <h2 class="title">{{title}}</h2>
      <div class="flex">
        <template v-for="(item, index) in data">
          <nuxt-link
            :key="index"
            :to="{ path: `${item.name.replace(/\s+/g, '_').toLowerCase()}` }"
            append
          >
            <Card :data="item" />
          </nuxt-link>
        </template>
      </div>
      <!-- /.flex -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import axios from 'axios';
import orderBy from 'lodash.orderby';
import Card from '@/components/Card';

export default {
  components: {
    Card,
  },
  computed: {
    data() {
      return orderBy(this.$store.state.data.starships, 'name');
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

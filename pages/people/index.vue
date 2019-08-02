<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">The Star Wars App</h1>
        <h2 class="subtitle">{{title}}</h2>
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
    </div>
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
      return orderBy(this.$store.state.data.people, 'name');
    },
  },
  data() {
    return {
      title: 'People',
    };
  },
};
</script>

<style>
</style>

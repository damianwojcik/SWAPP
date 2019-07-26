<template>
  <div class="Table">
    <div class="intro">
      <img
        v-if="data.image"
        class="intro__img"
        :src="data.image"
        :alt="data.name ? data.name : data.title"
      />
      <p v-if="data.opening_crawl" class="intro__text">{{data.opening_crawl}}</p>
    </div>
    <!-- /.intro -->
    <table class="table">
      <tbody>
        <!-- TODO: use computed instead of data -->
        <tr
          v-for="(item, name, index) in data"
          :key="index"
          v-if="item.length && name !=='image' && name !=='id' && name !=='opening_crawl' && index !== 0"
        >
          <td>{{ name | capitalize }}</td>
          <td v-if="Array.isArray(item)" class="flex">
            <!-- TODO: handle homeworld for Person -->
            <!-- <nuxt-link
                :to="{ path: `/${name === 'characters' || name === 'pilots' || name === 'residents' ? 'people' : name}/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
            >{{nestedItem}}</nuxt-link>-->
            <Card
              :data="nestedItem"
              v-for="(nestedItem, nestedName, nestedIndex) in item"
              :key="nestedIndex"
            />
          </td>
          <td v-else-if="name === 'homeworld' && item !== 'unknown'">
            <nuxt-link
              :to="{ path: `/planets/${item.replace(/\s+/g, '_').toLowerCase()}` }"
            >{{item}}</nuxt-link>
          </td>
          <td v-else>{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- /.Table -->
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Table',
  components: {
    Card,
  },
  props: {
    data: Object,
    required: true,
  },
};
</script>

<style lang="scss" scoped>
.Table {
  img {
    max-height: 300px;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
  .intro {
    display: flex;
    margin-bottom: 20px;
    &__text {
      margin-left: 20px;
    }
  }
}
</style>

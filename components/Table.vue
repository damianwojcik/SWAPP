<template>
  <div class="Table">
    <div class="intro">
      <img v-if="data.image" class="intro__img" :src="data.image" :alt="data.name" />
      <p v-if="data.opening_crawl" class="intro__text">{{data.opening_crawl}}</p>
    </div>
    <!-- /.intro -->
    <table class="table">
      <tbody>
        <!-- TODO: get rid of v-if-->
        <tr v-if="item && item.length" v-for="(item, name, index) in tableData" :key="index">
          <td>{{ name.replace(/_/g, ' ') | capitalize }}</td>
          <td v-if="Array.isArray(item)" class="flex">
            <template v-for="(nestedItem, nestedIndex) in item">
              <nuxt-link
                :key="nestedIndex"
                :to="{ path: `/${name}/${nestedItem.name.replace(/\s+/g, '_').toLowerCase()}` }"
              >
                <Card :data="nestedItem" />
              </nuxt-link>
            </template>
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
  computed: {
    tableData() {
      let tableData = { ...this.data };

      delete tableData.title;
      delete tableData.name;
      delete tableData.id;
      delete tableData.image;
      delete tableData.opening_crawl;

      return tableData;
    },
  },
};
</script>

<style lang="scss" scoped>
.Table {
  img {
    max-height: 300px;
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

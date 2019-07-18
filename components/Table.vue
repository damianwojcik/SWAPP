<template>
  <div class="Table">
    <img v-if="data.image" :src="data.image" :alt="data.name ? data.name : data.title" />
    <table class="table">
      <tbody>
        <!-- TODO: remove v-if by removing empty arrays in API / getters -->
        <tr
          v-for="(item, name, index) in data"
          :key="index"
          v-if="item.length && name !=='image' && index !== 0"
        >
          <td>{{name}}</td>
          <td v-if="Array.isArray(item) && name !== 'homeworld'">
            <div v-for="(nestedItem, nestedName, nestedIndex) in item" :key="nestedIndex">
              <nuxt-link
                :to="{ path: `/${name === 'characters' || name === 'pilots' || name === 'residents' ? 'people' : name}/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
              >{{nestedItem}}</nuxt-link>
            </div>
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
export default {
  name: 'Table',
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
}
</style>

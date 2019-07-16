<template>
  <table class="table">
    <tbody>
      <tr v-for="(item, name, index) in data" :key="index">
        <td>{{name}}</td>
        <td v-if="Array.isArray(item)">
          <div v-for="(nestedItem, nestedName, nestedIndex) in item" :key="nestedIndex">
            <nuxt-link
              :to="{ path: `/${name === 'characters' ? 'people' : name}/${nestedItem.replace(/\s+/g, '_').toLowerCase()}` }"
            >{{nestedItem}}</nuxt-link>
          </div>
        </td>
        <td v-else>{{item}}</td>
      </tr>
    </tbody>
  </table>
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

<style>
</style>

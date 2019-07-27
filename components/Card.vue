<template>
  <div class="Card card">
    <div v-if="data.image" class="card-image">
      <figure class="image is-2by3">
        <img :src="data.image" />
      </figure>
    </div>
    <div class="content">
      <p class="title is-6">{{data.name}}</p>
    </div>
  </div>
  <!-- /.Card -->
</template>

<script>
export default {
  props: {
    data: Object,
    required: true,
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 128px;
  margin: 0 10px 20px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    padding: 10px;
  }
  .card-image {
    width: 100%;
    border-bottom: 1px solid #efefef;
  }
  .title {
    text-align: center;
  }
}
</style>


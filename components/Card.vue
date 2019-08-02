<template>
  <div class="Card card">
    <div v-if="data.image" class="card-image">
      <figure class="image is-2by3">
        <img :src="data.image" />
      </figure>
    </div>
    <div class="content">
      <p class="title is-6">{{data.name ? data.name : data.title }}</p>
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
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.15),
      0 0 0 1px rgba(10, 10, 10, 0.15);
    .card-image {
      opacity: 0.9;
    }
    .title {
      color: #000;
    }
  }
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
    transition: opacity 0.2s ease;
  }
  .title {
    text-align: center;
    transition: color 0.2s ease;
  }
}
</style>


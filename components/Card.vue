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
  transition: all 0.2s ease;
  @media (min-width: 1024px) {
    margin: 0 20px 30px;
  }
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
  @media (max-width: 1024px) {
    border: 0;
    box-shadow: none;
    width: 100px;
    &:hover {
      box-shadow: none;
    }
    .card-image {
      border: 0;
      figure.image.is-2by3 {
        padding-top: 0;
        width: 100px;
        height: 100px;
        img {
          border-radius: 100%;
        }
      }
    }
    .content {
      padding: 5px 0;
      height: auto;
      .title.is-6 {
        font-size: 13px;
      }
    }
  }
}
</style>


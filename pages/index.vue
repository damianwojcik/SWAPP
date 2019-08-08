<template>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <Slider />
          </div>
        </div>
      </div>
      <!-- /.tile is-ancestor -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import Slider from '@/components/Slider';

export default {
  components: {
    Slider,
  },
};
</script>

<style>
</style>

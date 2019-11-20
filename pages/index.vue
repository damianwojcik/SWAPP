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
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child">
            <StatBoxHeight />
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child">
            <StatBoxWeight />
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child">
            <StatBoxPopulation />
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
import StatBoxHeight from '@/components/StatBoxHeight';
import StatBoxWeight from '@/components/StatBoxWeight';
import StatBoxPopulation from '@/components/StatBoxPopulation';

export default {
  components: {
    Slider,
    StatBoxHeight,
    StatBoxWeight,
    StatBoxPopulation,
  },
};
</script>

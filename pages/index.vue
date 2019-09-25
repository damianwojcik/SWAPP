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
            <StatBox />
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Box 2</p>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">Box 3</p>
          </div>
        </div>
      </div>
      <!-- /.tile is-ancestor -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
import Slider from "@/components/Slider";
import StatBox from "@/components/StatBox";

export default {
  components: {
    Slider,
    StatBox
  }
};
</script>

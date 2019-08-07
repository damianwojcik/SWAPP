<template>
  <div class="Slider">
    <header>
      <div class="select">
        <select v-model="selected">
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
          >{{category | capitalize}}</option>
        </select>
      </div>
      <div class="swiper-navigation">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <!-- /.swiper-navigation -->
      <nuxt-link class="link button is-link" :to="{ path: `/${selected}` }">View all</nuxt-link>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in renderData" :key="index">
          <!-- TODO: create global helper for creating links -->
          <nuxt-link :to="{ path: `/${selected}/${item.name.replace(/\s+/g, '_').toLowerCase()}` }">
            <Card :data="item" />
          </nuxt-link>
        </div>
        <!-- /.swiper-slide -->
      </div>
      <!-- /.swiper-wrapper -->
    </div>
    <!-- /.swiper-container -->
  </div>
  <!-- /.Slider -->
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import Card from '@/components/Card';

export default {
  components: {
    Card,
  },
  data() {
    return {
      selected: 'films',
      swiper: null,
    };
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    categories() {
      return this.$store.getters.getCategories();
    },
    renderData() {
      return this.data[this.selected.toLowerCase()];
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.Slider .swiper-container', {
        roundLengths: true,
        slidesPerView: 8,
        slidesPerGroup: 8,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        navigation: {
          nextEl: '.Slider .swiper-button-next',
          prevEl: '.Slider .swiper-button-prev',
        },
        breakpoints: {
          1216: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
          1024: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        },
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
  updated() {
    this.initSwiper();
  },
  destroyed() {
    this.swiper.destroy();
  },
};
</script>

<style lang="scss" scoped>
.Slider {
  display: block;
  header {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
  }
  .select {
    margin-right: 20px;
  }
  /deep/ .Card {
    border: 0;
    box-shadow: none;
    width: 100px;
    margin: auto;
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
  .swiper-container {
    height: 135px;
    &:before,
    &:after {
      display: block;
      width: 50px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      content: '';
      z-index: 9;
      pointer-events: none;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1);
    }
    &:after {
      display: none;
      left: 0;
      transform: rotate(0.5turn);
      @media (min-width: 1024px) {
        display: block;
      }
    }
    .swiper-wrapper {
      justify-content: space-between;
    }
    .swiper-slide {
      width: 100px;
      a {
        display: block;
      }
    }
  }
  .link {
    margin-right: 20px;
  }
  .swiper-navigation {
    display: none;
    height: 26px;
    margin-right: 20px;
    @media (min-width: 1024px) {
      display: flex;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    outline: none;
    position: relative;
    height: 26px;
    width: 16px;
    background-size: 16px 26px;
    margin-top: 0;
    top: auto;
  }
  .swiper-button-prev {
    margin-right: 30px;
  }
}
</style>

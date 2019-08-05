<template>
  <div class="Slider">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
  <!-- /.Slider -->
</template>

<script>
import Swiper from 'swiper';

export default {
  data() {
    return {
      swiper: null,
    };
  },
  computed: {
    leagues() {
      return (
        [
          {
            id: [196, 53, 54, 47, 55, 87, 42],
            name: 'Polecane',
          },
          {
            id: [196, 53, 54, 47, 55, 87, 42],
            name: 'Dupa',
          },
        ] || []
      );
    },
    activeLeague() {
      return {
        id: [196, 53, 54, 47, 55, 87, 42],
        name: 'Dupa',
      };
    },
    timetableBoxDaysRange() {
      return this.$store.state.timetableBoxDaysRange || null;
    },
    events() {
      return this.$store.state.timetableBoxData || [];
    },
  },
  methods: {
    setActiveLeague(league) {
      this.$store.dispatch('fetchTimetableBoxData', league);
      this.$store.commit('SET_ACTIVE_LEAGUE', league);
    },
    initSwiper() {
      this.swiper = new Swiper('.TimetableBox .swiper-container', {
        roundLengths: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
    generateEventLink(event) {
      return `football/${event.league.replace(
        /\s+/g,
        '',
      )}/${event.title.replace(/\s+/g, '')}/${event.id}`;
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
}
</style>

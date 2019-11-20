<template>
  <div class="StatBox box">
    <h3 class="StatBox__title" @click="handleClickTitle">{{ title }}</h3>
    <div class="StatBox__entry" v-for="(planet, index) in planets" :key="planet.id">
      <span class="index">{{ index + 1 }}</span>
      <span class="name">
        <nuxt-link
          :to="{
            path: `/planets/${planet.name.replace(/\s+/g, '_').toLowerCase()}`
          }"
        >{{ planet.name }}</nuxt-link>
      </span>
      <span class="value">{{ planet.population }}</span>
    </div>
    <!-- /.StatBox__entry -->
    <nuxt-link class="link" :to="{ path: `/planets` }">View all</nuxt-link>
  </div>
  <!-- /.StatBox -->
</template>

<script>
export default {
  data() {
    return {
      sort: 'desc',
    };
  },
  computed: {
    planets() {
      const planets = [...this.$store.state.data.planets];
      let sortedPlanets = planets
        .map(planet => {
          return {
            id: planet.id,
            name: planet.name,
            population: planet.population != 'unknown' ? planet.population : '',
          };
        })
        .sort((a, b) =>
          this.sort === 'desc' && a.population && b.population
            ? a.population - b.population
            : b.population - a.population,
        )
        .slice(0, 5);

      return sortedPlanets;
    },
    title() {
      return this.sort === 'asc'
        ? 'Most populated Planets ⇅'
        : 'Least populated Planets ⇅';
    },
  },
  methods: {
    handleClickTitle() {
      return this.sort === 'asc' ? (this.sort = 'desc') : (this.sort = 'asc');
    },
  },
};
</script>

<style lang="scss" scoped>
.StatBox {
  padding: 13px 15px;
  font-size: 15px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
  &__title {
    font-size: 16px;
    line-height: 1.3125;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
  &__entry {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #eee;
    height: 30px;
    @media (min-width: 1024px) {
      height: 40px;
    }
    .index a,
    .detail a {
      color: #999999;
      &:hover {
        text-decoration: underline;
      }
    }
    .index {
      margin-right: 20px;
    }
    .name {
      margin-right: 5px;
      a {
        color: #4a4a4a;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .value {
      margin-left: auto;
      font-weight: bold;
    }
    .detail {
      font-size: 12px;
      @media (min-width: 1024px) {
        font-size: 14px;
      }
    }
  }
  .link {
    display: block;
    text-align: center;
    margin-top: 13px;
    text-decoration: underline;
    @media (min-width: 1024px) {
      margin-top: 20px;
    }
  }
}
</style>

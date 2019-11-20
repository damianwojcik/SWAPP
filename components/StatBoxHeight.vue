<template>
  <div class="StatBox box">
    <h3 class="StatBox__title" @click="handleClickTitle">{{ title }}</h3>
    <div class="StatBox__entry" v-for="(person, index) in people" :key="person.id">
      <span class="index">{{ index + 1 }}</span>
      <span class="name">
        <nuxt-link
          :to="{
            path: `/people/${person.name.replace(/\s+/g, '_').toLowerCase()}`
          }"
        >{{ person.name }}</nuxt-link>
      </span>
      <span class="detail">
        <nuxt-link :to="{ path: `/species/${person.specie.toLowerCase()}` }">
          {{
          person.specie
          }}
        </nuxt-link>
      </span>
      <span class="value">{{ person.height }} cm</span>
    </div>
    <!-- /.StatBox__entry -->
    <nuxt-link class="link" :to="{ path: `/people` }">View all</nuxt-link>
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
    people() {
      const people = [...this.$store.state.data.people];
      let sortedPeople = people
        .map(person => {
          return {
            id: person.id,
            name: person.name,
            height: person.height,
            specie: person.species[0] ? person.species[0] : '',
          };
        })
        .sort((a, b) =>
          this.sort === 'desc' ? a.height - b.height : b.height - a.height,
        )
        .slice(0, 5);

      return sortedPeople;
    },
    title() {
      return this.sort === 'asc' ? 'Tallest People ⇅' : 'Shortest People ⇅';
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

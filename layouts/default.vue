<template>
  <div class="page">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <h1 class="subtitle">SWAPP</h1>
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': navActive}"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleNavActive"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <!-- /.navbar-brand -->

        <div class="navbar-menu" :class="{ 'is-active': navActive}" @click="toggleNavActive">
          <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
          <nuxt-link to="/films" class="navbar-item">Films</nuxt-link>
          <nuxt-link to="/people" class="navbar-item">People</nuxt-link>
          <nuxt-link to="/starships" class="navbar-item">Starships</nuxt-link>
          <nuxt-link to="/vehicles" class="navbar-item">Vehicles</nuxt-link>
          <nuxt-link to="/species" class="navbar-item">Species</nuxt-link>
          <nuxt-link to="/planets" class="navbar-item">Planets</nuxt-link>
          <a
            href="https://github.com/damianwojcik/SWAPP"
            class="navbar-item right"
            target="_blank"
            rel="noopener"
          >
            <img src="/icons/github.png" alt="GitHub" />
          </a>
        </div>
        <!-- /.navbar-menu -->
      </div>
      <!-- /.container -->
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <strong>SWAPP</strong> by
        <a href="http://dwojcik.dev/" target="_blank" rel="noopener">Damian Wójcik</a>
        <p>
          <small>
            API:
            <a href="https://swapi.dev/" target="_blank" rel="noopener">swapi.dev</a>
          </small>
          <small>
            API:
            <a
              href="https://starwars.fandom.com/wiki/Main_Page"
              target="_blank"
              rel="noopener"
            >Wookiepedia</a>
          </small>
          <small>
            Code:
            <a
              href="https://github.com/damianwojcik/SWAPP"
              target="_blank"
              rel="noopener"
            >GitHub</a>
          </small>
        </p>
      </div>
    </footer>
  </div>
  <!-- /.page -->
</template>

<script>
export default {
  data() {
    return {
      navActive: false
    };
  },
  methods: {
    toggleNavActive() {
      this.navActive = !this.navActive;
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.section {
  flex: 1;
}

.tile {
  width: 100%;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  justify-content: space-around;
}

.navbar {
  border-bottom: 1px solid #dbdbdb;
}

.navbar-item {
  &.right {
    display: flex;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    img {
      width: 24px;
      height: 24px;
      max-width: none;
      max-height: none;
    }
    &:hover {
      background: transparent;
    }
  }
}

footer {
  small {
    font-size: 0.7em;
    display: inline-block;
    margin-top: 7px;
  }
}
</style>

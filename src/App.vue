<template>
  <div id="nav" class="container">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view data-aos="flip-up" data-aos-duration="1000" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import AOS from 'aos';

export default {
  setup: () => {
    AOS.init();
  },
  mounted: () => {
    const test = 'test eslint~~';
    console.log(test);
  },
};
</script>

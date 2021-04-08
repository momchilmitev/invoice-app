<template>
  <div id="app" class="app">
    <Aside @theme-changed="switchTheme" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Aside from "./components/Aside";

export default {
  components: {
    Aside,
  },
  data() {
    return {
      darkTheme: false,
    };
  },
  methods: {
    switchTheme() {
      this.$data.darkTheme = !this.$data.darkTheme;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

:root {
  --dark-purple: #7c5dfa;
  --light-purple: #9277ff;
  --dark-gray: #1e2139;
  --gray: #252945;
  --light-blue: #dfe3fa;
  --gray-blue: #888eb0;
  --blue: #7e88c3;
  --black: #0c0e16;
  --red: #ec5757;
  --pink: #fc9798;
  --white: #f8f8fb;
  --dark: #141625;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "Spartan", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  box-sizing: border-box;
  min-height: 100vh;
  // overflow: scroll;
  background-color: var(--white);
}

.main {
  padding: 0 24px;
  padding-bottom: 24px;
}
</style>

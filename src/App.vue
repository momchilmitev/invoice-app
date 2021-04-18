<template>
  <div id="app" :class="theme">
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
  computed: {
    theme() {
      return this.darkTheme ? "app app-dark" : "app";
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

/* width */
::-webkit-scrollbar {
  width: 30px;
}

// /* Track */
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #dfe3fa;
  border: 10px solid transparent;
  border-radius: 20px;
  background-clip: padding-box;
}

.app {
  box-sizing: border-box;
  min-height: 100vh;
  background-color: var(--white);
}

.main {
  padding: 0 24px;
  padding-bottom: 24px;
}

@media (min-width: 1024px) {
  .app {
    display: flex;
  }

  .main {
    width: 730px;
    margin: 0 auto;
    margin-top: 72px;
  }
}

.app-dark {
  background-color: #141625;

  & .info {
    color: #fff;
  }

  & .filter {
    color: #fff;
  }

  & .filter__filters {
    background-color: #1e2139;
  }

  & .item {
    background-color: #1e2139;
    & > p:not(:nth-child(5)) {
      color: #fff;
    }
  }

  & .item__status--draft {
    & > span {
      background-color: #fff;
    }
    color: #fff;
    background-color: rgba($color: #dfe3fa, $alpha: 0.06);
  }

  & .empty__header,
  .empty__description {
    color: #fff;
  }

  & .btn--back {
    color: #fff;
  }

  & .btn--white {
    color: #fff;
    background-color: #252945;
  }

  & .invoice__header,
  .invoice__main,
  .invoice__actions {
    background-color: #1e2139;
  }

  & .invoice__info,
  .invoice__details h3,
  .invoice__details p {
    color: #fff;
  }

  & .invoice__items {
    background-color: #252945;
  }

  & .invoice__items__total {
    background-color: #0e0c16;
  }

  & .invoice__items__header p {
    color: #fff;
  }

  & .invoice__item__name,
  .invoice__item__quantity,
  .invoice__item__total {
    color: #fff;
  }

  & .modal__container {
    background-color: #1e2139;
    color: #fff;
  }

  & .modal__content {
    color: #fff;
  }
}
</style>

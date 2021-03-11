<template>
  <aside class="aside">
    <div class="logo">
      <div class="logo__up">
        <div class="logo__down"></div>
        <img :src="logo" alt="logo" class="logo__image" />
      </div>
    </div>
    <div class="aside__images">
      <div class="aside__icon" @click="switchTheme">
        <img :src="darkTheme ? moon : sun" alt="theme-icon" />
      </div>
      <div class="aside__avatar">
        <img :src="avatar" alt="avatar" />
      </div>
    </div>
  </aside>
</template>

<script>
import moon from "../assets/icons/icon-moon.svg";
import sun from "../assets/icons/icon-sun.svg";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.jpg";

export default {
  name: "Aside",
  data() {
    return {
      darkTheme: false,
      avatar,
      moon,
      sun,
      logo,
    };
  },
  methods: {
    switchTheme() {
      this.$data.darkTheme = !this.$data.darkTheme;
      this.$emit("theme-changed");
    },
  },
};
</script>

<style lang="scss">
.aside {
  background-color: #373d53;
  display: flex;
  justify-content: space-between;
  height: 72px;
  margin-bottom: 32px;

  &__images {
    display: flex;
  }

  &__icon {
    border-right: 1px solid #494e6e;

    & > img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 26px;
    }
  }

  &__avatar {
    & > img {
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 20px 24px;
    }
  }
}

.logo {
  height: 100%;
  position: relative;
  &__up {
    background-color: var(--dark-purple);
    height: 100%;
    width: 72px;
    border-radius: 0px 20px 20px 0px;
  }

  &__down {
    height: 50%;
    width: 100%;
    background-color: var(--light-purple);
    transform: translateY(100%);
    border-radius: 20px 0px 20px 0px;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    margin: 23px;
    z-index: 1;
  }
}
</style>

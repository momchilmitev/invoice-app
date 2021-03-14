<template>
  <button class="btn" :class="modiffierClass" @click="emitEvent">
    {{ text }}
  </button>
</template>

<script>
import { Event } from "../utils/Event";

export default {
  props: ["text", "modiffier", "eventName"],
  data() {
    return {
      darkTheme: false,
      modiffierClass: `btn--${this.$props.modiffier}`,
    };
  },
  methods: {
    emitEvent() {
      Event.fire(`${this.$props.eventName}`);
    },
  },
};
</script>

<style lang="scss">
.btn {
  outline: none;
  font-family: inherit;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  background: none;
  border: none;
  padding: 15px;
  border-radius: 24px;

  &--create {
    position: relative;
    background-color: var(--dark-purple);
    color: #fff;
    padding-left: 46px;

    &::before {
      position: absolute;
      content: "";
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: url("../assets/icons/icon-plus.svg"), #fff;
      background-repeat: no-repeat;
      background-position: center;
      left: 6px;
      top: 6px;
    }
  }

  &--back {
    position: relative;
    margin-left: 5px;

    &::before {
      position: absolute;
      content: "";
      display: inline-block;
      width: 10px;
      height: 12px;
      border-radius: 50%;
      background: url("../assets/icons/icon-arrow-left.svg");
      background-repeat: no-repeat;
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &--purple {
    padding: 17px 24px;
    background-color: var(--dark-purple);
    color: #fff;
  }

  &--white {
    padding: 17px 24px;
    background-color: #f9fafe;
    color: var(--blue);
  }

  &--red {
    padding: 17px 24px;
    background-color: var(--red);
    color: #fff;
  }

  &--black {
    padding: 17px 24px;
    background-color: #373b53;
    color: #888eb0;
  }
}
</style>

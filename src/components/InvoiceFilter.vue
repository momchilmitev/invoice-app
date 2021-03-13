<template>
  <div class="filter" @click="isOpen = !isOpen">
    Filter <span class="filter__arrow"></span>
    <div class="filter__filters" :class="{ isOpen }">
      <div class="filter__filter" @change="addFilter('draft')">
        <input type="checkbox" /> Draft
      </div>
      <div class="filter__filter" @change="addFilter('pending')">
        <input type="checkbox" /> Pending
      </div>
      <div class="filter__filter" @change="addFilter('paid')">
        <input type="checkbox" /> Paid
      </div>
    </div>
  </div>
</template>

<script>
import { Event } from "../utils/Event";

export default {
  data() {
    return {
      isOpen: false,
      filters: [],
    };
  },
  methods: {
    addFilter(filter) {
      if (this.filters.includes(filter)) {
        this.filters = this.filters.filter((f) => f !== filter);
      } else {
        this.filters.push(filter);
      }

      Event.fire("filter", this.filters);
    },
  },
};
</script>

<style lang="scss">
.filter {
  box-sizing: border-box;
  position: relative;
  margin-right: 20px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;

  &__arrow {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: url("../assets/icons/icon-arrow-down.svg");
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 10px;
  }

  &__filters {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    width: 192px;
    height: 128px;
    position: absolute;
    top: 40px;
    left: -90px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  }

  &__filter {
    display: flex;
    align-items: center;

    & > input {
      margin-right: 13px;
    }
  }
}

.isOpen {
  display: flex;
}
</style>

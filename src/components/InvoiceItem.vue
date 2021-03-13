<template>
  <router-link class="link" to="/view">
    <article class="item">
      <p class="item__id">#{{ invoice.id }}</p>
      <p class="item__date">{{ invoice.paymentDue }}</p>
      <p class="item__name">{{ invoice.clientName }}</p>
      <p class="item__price">${{ invoice.total }}</p>
      <p class="item__status" :class="statusClass">
        <span></span>
        {{ invoice.status }}
      </p>
      <p class="item__arrow">
        <img :src="rightArrow" alt="arrow-right" />
      </p>
    </article>
  </router-link>
</template>

<script>
import rightArrow from "../assets/icons/icon-arrow-right.svg";

export default {
  name: "invoice-item",
  props: ["invoice"],
  data() {
    return {
      rightArrow,
      statusClass: `item__status--${this.$props.invoice.status}`,
    };
  },
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 135px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
  box-sizing: border-box;

  &__id {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #0c0e16;
  }

  &__date,
  &__name {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: var(--gray-blue);
  }

  &__date {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: start;
  }

  &__name {
    text-align: right;
  }

  &__price {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: var(--black);
    margin-top: 10px;
  }
  &__status {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    margin: 0;
    height: 40px;
    width: 80%;
    border-radius: 6px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;

    & > span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 8px;
    }

    &--pending {
      background-color: rgba($color: #ff8f00, $alpha: 0.06);
      color: #ff8f00;

      & > span {
        background-color: #ff8f00;
      }
    }

    &--paid {
      background-color: rgba($color: #33d69f, $alpha: 0.06);
      color: #33d69f;

      & > span {
        background-color: #33d69f;
      }
    }

    &--draft {
      background-color: rgba($color: #373b53, $alpha: 0.06);
      color: #373b53;

      & > span {
        background-color: #373b53;
      }
    }
  }

  &__arrow {
    display: none;
  }
}
</style>

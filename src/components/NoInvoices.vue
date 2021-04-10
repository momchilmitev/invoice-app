<template>
  <section class="empty__container">
    <div class="empty__main">
      <img class="empty__image" :src="imageSrc" alt="empty image" />
      <h3 class="empty__header">There is nothing here</h3>
      <p class="empty__description">
        Create a new invoice by clicking the <span>New</span> button and get
        started
      </p>
    </div>
  </section>
</template>

<script>
import emptyImage from "../assets/images/empty.svg";

export default {
  data() {
    return {
      imageSrc: emptyImage,
    };
  },
};
</script>

<style lang="scss">
.empty {
  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__main {
    width: 60%;
  }

  &__image {
    width: 90%;
    display: inline-block;
    margin-bottom: 40px;
  }

  &__header {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.625px;
    color: #0c0e16;
    margin-bottom: 24px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.25px;
    color: #888eb0;

    & > span {
      font-weight: bold;
    }
  }
}

@media (min-width: 768px) {
  .empty {
    &__main {
      text-align: center;
      width: 40%;
    }

    &__image {
      width: 60%;
    }

    &__description {
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>

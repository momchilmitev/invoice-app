<template>
  <div class="modal">
    <div class="modal__container">
      <h3 class="modal__title">Confirm Deletion</h3>
      <p class="modal__content">
        Are you sure you want to delete invoice #{{ invoiceId }}? This action
        cannot be undone.
      </p>
      <div class="modal__actions">
        <Button
          class="cencel"
          text="cencel"
          modiffier="white"
          eventName="close-modal"
        ></Button>
        <Button text="delete" modiffier="red" eventName="delete"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  props: ["invoiceId"],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.cencel {
  margin-right: 8px;
}

.modal {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 1;

  &__container {
    box-sizing: border-box;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 327px;
    height: auto;
    padding: 32px;
    background: #fff;
    border-radius: 8px;
  }

  &__content {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: -0.25px;
    color: #888eb0;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>

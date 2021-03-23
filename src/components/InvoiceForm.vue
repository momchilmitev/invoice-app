<template>
  <section class="form__wrapper">
    <h1 class="form__title">New Invoice</h1>
    <form class="form__container">
      <h4>Bill From</h4>
      <div>
        <p>Street Address</p>
        <input type="text" name="street" />
      </div>
      <div class="form__address-details">
        <div>
          <p>City</p>
          <input type="text" name="city" />
        </div>
        <div>
          <p>Post Code</p>
          <input type="text" name="post-code" />
        </div>
        <div>
          <p>Country</p>
          <input type="text" name="country" />
        </div>
      </div>
      <h4>Bill To</h4>
      <div>
        <p>Client Name</p>
        <input type="text" name="client-name" />
      </div>
      <div>
        <p>Client Email</p>
        <input type="text" name="client-email" />
      </div>
      <div>
        <p>Street Address</p>
        <input type="text" name="client-street" />
      </div>
      <div class="form__address-details">
        <div>
          <p>City</p>
          <input type="text" name="client-city" />
        </div>
        <div>
          <p>Post Code</p>
          <input type="text" name="client-post-code" />
        </div>
        <div>
          <p>Country</p>
          <input type="text" name="client-country" />
        </div>
      </div>
      <div>
        <p>Invoice Date</p>
        <input type="date" name="invoice-date" />
        <p>Payment Terms</p>
        <select name="payment-terms">
          <option value="1">Next 1 Day</option>
          <option value="7">Next 7 Day</option>
          <option value="14">Next 14 Day</option>
          <option value="30">Next 30 Day</option>
        </select>
      </div>
      <div>
        <p>Project Description</p>
        <input type="text" name="project-description" />
      </div>
      <h4>Item List</h4>
      <div class="item__properties">
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span>Delete</span>
      </div>
      <div></div>
      <form class="item__form">
        <input type="text" name="item-name" placeholder="Item Name" />
        <input type="number" name="item-qty" placeholder="Item Quantity" />
        <input type="number" name="item-price" placeholder="Item Price" />
        <Button
          text="+ Add New Item"
          modiffier="white"
          eventName="add-item"
        ></Button>
      </form>
    </form>
    <section class="form__actions">
      <div v-if="(type = 'new')">
        <Button text="Discard" modiffier="white" eventName="cencel"></Button>
        <Button text="Save as Draft" modiffier="black" eventName="saveDraft">
        </Button>
        <Button text="Save & Send" modiffier="purple" eventName="save">
        </Button>
      </div>
      <div v-else>
        <Button></Button>
        <Button></Button>
      </div>
    </section>
  </section>
</template>

<script>
import Button from "./Button";

export default {
  props: ["type"],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.form {
  &__wrapper {
    box-sizing: border-box;
    padding-bottom: 21px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: #fff;
    z-index: 1;
    padding: 24px;
  }

  &__title {
    margin-bottom: 24px;
  }

  &__container {
    & > h4 {
      margin-bottom: 24px;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #7c5dfa;
    }

    & > div p,
    .item__properties > span {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #7e88c3;
      margin-bottom: 10px;
    }

    & > div input,
    .item__form > input,
    select {
      width: 100%;
      background: #ffffff;
      border: 1px solid #dfe3fa;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 17px 20px;
      margin-bottom: 24px;
    }

    & > div > select {
      padding-right: 40px;
    }
  }

  &__address-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div:nth-child(1) {
      margin-right: 23px;
      flex: 1 1 40%;
    }

    & > div:nth-child(2) {
      flex: 1 1 40%;
    }

    & > div:nth-child(3) {
      flex: 1 1 100%;
    }
  }

  &__actions {
    margin-top: 88px;

    & div {
      & > .btn {
        padding: 17px 15px;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
    }
  }
}

.item__properties {
  display: flex;
  justify-content: space-between;
}

.item__form {
  display: flex;
  flex-wrap: wrap;

  & > input:nth-child(1) {
    flex: 1 1 100%;
  }

  & > input:nth-child(2) {
    flex: 1 1 40%;
    margin-right: 24px;
  }

  & > input:nth-child(3) {
    flex: 1 1 40%;
  }

  & > .btn {
    margin-top: 28px;
    flex: 1 1 100%;
  }
}
</style>

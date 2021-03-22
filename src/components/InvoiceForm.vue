<template>
  <section class="form__wrapper">
    <h1 class="form__title">New Invoice</h1>
    <form class="form__container">
      <h4>Bill From</h4>
      <div>
        <p>Street Address</p>
        <input type="text" name="street" />
      </div>
      <div>
        <p>City</p>
        <input type="text" name="city" />
        <p>Post Code</p>
        <input type="text" name="post-code" />
        <p>Country</p>
        <input type="text" name="country" />
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
      <div>
        <p>City</p>
        <input type="text" name="client-city" />
        <p>Post Code</p>
        <input type="text" name="client-post-code" />
        <p>Country</p>
        <input type="text" name="client-country" />
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
      <div>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span>Delete</span>
      </div>
      <form class="item__form">
        <input type="text" name="item-name" placeholder="Item Name" />
        <input type="number" name="item-qty" placeholder="Item Quantity" />
        <input type="number" name="item-price" placeholder="Item Price" />
      </form>
      <Button
        text="+ Add New Item"
        modiffier="white"
        eventName="add-item"
      ></Button>
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
.form__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 1;
}
</style>

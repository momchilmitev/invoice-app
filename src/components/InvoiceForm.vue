<template>
  <section class="form__wrapper">
    <h1 class="form__title">
      {{ invoice ? `Edit #${invoice._id}` : "New Invoice" }}
    </h1>
    <form class="form__container" @submit.prevent="submitForm">
      <h4>Bill From</h4>
      <div>
        <p>Street Address</p>
        <input type="text" v-model="invoiceForm.senderAddress.street" />
      </div>
      <div class="form__address-details">
        <div>
          <p>City</p>
          <input type="text" v-model="invoiceForm.senderAddress.city" />
        </div>
        <div>
          <p>Post Code</p>
          <input type="text" v-model="invoiceForm.senderAddress.postCode" />
        </div>
        <div>
          <p>Country</p>
          <input type="text" v-model="invoiceForm.senderAddress.country" />
        </div>
      </div>
      <h4>Bill To</h4>
      <div>
        <p>Client Name</p>
        <input type="text" v-model="invoiceForm.clientName" />
      </div>
      <div>
        <p>Client Email</p>
        <input type="text" v-model="invoiceForm.clientEmail" />
      </div>
      <div>
        <p>Street Address</p>
        <input type="text" v-model="invoiceForm.clientAddress.street" />
      </div>
      <div class="form__address-details">
        <div>
          <p>City</p>
          <input type="text" v-model="invoiceForm.clientAddress.city" />
        </div>
        <div>
          <p>Post Code</p>
          <input type="text" v-model="invoiceForm.clientAddress.postCode" />
        </div>
        <div>
          <p>Country</p>
          <input type="text" v-model="invoiceForm.clientAddress.country" />
        </div>
      </div>
      <div>
        <p>Invoice Date</p>
        <input type="date" v-model="invoiceForm.createdAt" />
        <p>Payment Terms</p>
        <select v-model="invoiceForm.paymentTerms">
          <option value="1">Next 1 Day</option>
          <option value="7">Next 7 Day</option>
          <option value="14">Next 14 Day</option>
          <option value="30">Next 30 Day</option>
        </select>
      </div>
      <div>
        <p>Project Description</p>
        <input type="text" v-model="invoiceForm.description" />
      </div>
      <h4>Item List</h4>
      <div class="item__properties">
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span>Delete</span>
      </div>
      <div
        class="item__container"
        v-for="item in invoiceForm.items"
        :key="item.name"
      >
        <span>{{ item.name }}</span>
        <span>{{ item.quantity }}</span>
        <span>{{ item.price }}</span>
        <span>{{ item.total }}</span>
        <img class="item__icon" :src="deleteIcon" alt="delete icon" />
      </div>
      <form class="item__form" @submit.prevent="">
        <input type="text" placeholder="Item Name" v-model="itemForm.name" />
        <input
          type="number"
          placeholder="Item Quantity"
          v-model="itemForm.quantity"
        />
        <input
          type="number"
          placeholder="Item Price"
          v-model="itemForm.price"
        />
        <Button
          text="+ Add New Item"
          modiffier="white"
          eventName="add-item"
        ></Button>
      </form>
    </form>
    <section class="form__actions">
      <div v-if="formType === 'new'">
        <Button text="Discard" modiffier="white" eventName="cencel"></Button>
        <Button text="Save as Draft" modiffier="black" eventName="saveDraft">
        </Button>
        <Button text="Save & Send" modiffier="purple" eventName="save">
        </Button>
      </div>
      <div v-else>
        <Button text="cencel" modiffier="white" eventName="cencel"></Button>
        <Button
          text="Save Changes"
          modiffier="purple"
          eventName="update"
        ></Button>
      </div>
    </section>
  </section>
</template>

<script>
import { Event } from "../utils/Event";
import Button from "./Button";
import Form from "../utils/Form";
import deleteIcon from "../assets/icons/icon-delete.svg";

export default {
  props: ["formType", "invoice"],
  components: {
    Button,
  },
  data() {
    return {
      deleteIcon,
      invoiceForm: this.$props.invoice
        ? Object.assign(this.newForm(), this.$props.invoice)
        : this.newForm(),
      itemForm: new Form({
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      }),
    };
  },
  mounted() {
    Event.listen("save", () => {
      this.invoiceForm.paymentDue = this.addDays(
        this.invoiceForm.createdAt,
        this.invoiceForm.paymentTerms
      );
      this.axios
        .post("http://localhost:3001/invoices", this.invoiceForm.data())
        .then(res => {
          console.log(res);
          this.invoiceForm.reset();
          Event.fire("created");
        })
        .catch(e => console.log(e));
    });

    Event.listen("update", () => {
      this.invoiceForm.paymentDue = this.addDays(
        this.invoiceForm.createdAt,
        this.invoiceForm.paymentTerms
      );
      this.axios
        .put(
          `http://localhost:3001/invoices/${this.$props.invoice._id}`,
          this.invoiceForm.data()
        )
        .then(() => {
          Event.fire("cencel");
        })
        .catch(e => console.log(e));
    });

    Event.listen("add-item", () => {
      let item = {
        name: this.itemForm.name,
        quantity: this.itemForm.quantity,
        price: this.itemForm.price,
        total: Number(this.itemForm.price) * Number(this.itemForm.quantity),
      };

      this.invoiceForm.items.push(item);
    });
  },
  destroyed() {
    Event.stop("save");
  },
  methods: {
    addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + Number(days));
      return `${result.getFullYear()}-${result.getMonth() +
        1}-${result.getDate()}`;
    },
    newForm() {
      return new Form({
        id: "",
        createdAt: "",
        paymentDue: "",
        description: "",
        paymentTerms: "",
        clientName: "",
        clientEmail: "",
        status: "pending",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [],
        total: 0,
      });
    },
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

.item__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 15px 0;
  background-color: #f9fafe;
  padding: 10px;
  border-radius: 4px;

  & > span {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #7c5dfa;
  }
}
</style>

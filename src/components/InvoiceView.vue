<template>
  <div>
    <article v-if="invoice" class="invoice">
      <button @click="goBack" class="btn btn--back">Go back</button>
      <div class="invoice__header">
        <div class="invoice__info">
          Status
          <p class="invoice__status" :class="statusClass">
            <span></span>{{ invoice.status }}
          </p>
        </div>
        <div class="invoice__actions">
          <Button text="Edit" modiffier="white" eventName="edit"></Button>
          <Button text="Delete" modiffier="red" eventName="open-modal"></Button>
          <Button
            text="Mark as Paid"
            modiffier="purple"
            eventName="paid"
          ></Button>
        </div>
      </div>
      <div class="invoice__main">
        <div class="invoice__details">
          <div class="invoice__id">
            <div>
              <h3>#{{ invoice.id }}</h3>
              <p>{{ invoice.description }}</p>
            </div>
            <div>
              <p>{{ invoice.senderAddress.street }}</p>
              <p>{{ invoice.senderAddress.city }}</p>
              <p>{{ invoice.senderAddress.postCode }}</p>
              <p>{{ invoice.senderAddress.country }}</p>
            </div>
          </div>
          <div class="invoice__date">
            <div>
              <p>Invoice Date</p>
              <h3>{{ invoice.createdAt }}</h3>
              <p>Payment Due</p>
              <h3>{{ invoice.paymentDue }}</h3>
            </div>
            <div>
              <p>Bill To</p>
              <h3>{{ invoice.clientName }}</h3>
              <p>{{ invoice.clientAddress.street }}</p>
              <p>{{ invoice.clientAddress.city }}</p>
              <p>{{ invoice.clientAddress.postCode }}</p>
              <p>{{ invoice.clientAddress.country }}</p>
            </div>
            <div>
              <p>Sent to</p>
              <h3>{{ invoice.clientEmail }}</h3>
            </div>
          </div>
        </div>
        <div class="invoice__items">
          <div class="invoice__items__header">
            <p>Item Name</p>
            <p>QTY.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <div
            class="invoice__item"
            v-for="item in invoice.items"
            :key="item.name"
          >
            <div>
              <p class="invoice__item__name">{{ item.name }}</p>
              <p class="invoice__item__quantity">
                {{ item.quantity }} x $ {{ item.price }}
              </p>
            </div>
            <p class="invoice__item__total">$ {{ item.total }}</p>
          </div>
          <div class="invoice__items__total">
            <p>Grand Total</p>
            <p>$ {{ invoice.total }}</p>
          </div>
        </div>
      </div>
    </article>
    <Loader v-else></Loader>
    <DeleteModal v-if="isOpen" :invoiceId="invoice.id"></DeleteModal>
  </div>
</template>

<script>
import { Event } from "../utils/Event";
import Button from "./Button";
import Loader from "./Loader";
import DeleteModal from "./DeleteModal";

export default {
  props: ["invoiceId"],
  components: {
    Button,
    Loader,
    DeleteModal,
  },
  data() {
    return {
      invoice: null,
      isOpen: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getInvoice() {
      this.axios
        .get(`http://localhost:3001/invoices/${this.$props.invoiceId}`)
        .then(res => (this.invoice = res.data));
    },
    markAsPaid() {
      this.axios
        .patch(`http://localhost:3001/invoices/${this.$props.invoiceId}`)
        .then(() => {
          this.getInvoice();
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteInvoice() {
      this.axios
        .delete(`http://localhost:3001/invoices/${this.$props.invoiceId}`)
        .then(() => this.$router.push("/"))
        .catch(e => console.log(e));
    },
  },
  computed: {
    statusClass() {
      return `item__status--${this.invoice.status}`;
    },
  },
  created() {
    Event.listen("paid", () => {
      this.markAsPaid();
    });

    Event.listen("open-modal", () => {
      this.isOpen = true;
    });

    Event.listen("cencel", () => {
      this.isOpen = false;
    });

    Event.listen("delete", () => {
      this.deleteInvoice();
    });
  },
  mounted() {
    this.getInvoice();
  },
};
</script>

<style lang="scss">
.invoice {
  margin-bottom: 147px;

  &__header {
    padding: 24px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 22px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__status {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    margin: 0;
    height: 40px;
    width: 40%;
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

  &__actions {
    display: flex;
    justify-content: space-between;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 21px 24px;
    background-color: #fff;
  }

  &__main {
    padding: 24px;
    background-color: #fff;
    margin-top: 16px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
  }

  &__details {
    & p {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #7e88c3;
    }

    & h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: -0.3125px;
      color: #0c0e16;
    }
  }

  &__items {
    background-color: #f9fafe;
    border-radius: 8px;
    margin-top: 40px;

    &__header {
      display: none;
    }

    &__total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      background: #373b53;
      border-radius: 0px 0px 8px 8px;
      color: #fff;
      margin-top: 24px;

      & > p:first-child {
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 18px;
        letter-spacing: -0.229167px;
      }

      & > p:last-child {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -0.416667px;
      }
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 24px 0 24px;

    &__name {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #0c0e16;
      padding-bottom: 8px;
    }

    &__quantity {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #7e88c3;
    }

    &__total {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: #0c0e16;
    }
  }

  &__id {
    & div:nth-child(1),
    div:nth-child(2) {
      margin-bottom: 30px;
    }
  }

  &__date {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & h3 {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>

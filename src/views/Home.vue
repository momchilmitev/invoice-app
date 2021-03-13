<template>
  <div>
    <section class="info">
      <h2>
        Invoices
        <span>{{ invoices.length ? invoices.length : 0 }} invoices</span>
      </h2>
      <div class="info__actions">
        <div>Filter</div>
        <Button
          text="New"
          modiffier="create"
          eventName="createInvoice"
        ></Button>
      </div>
    </section>
    <invoice-list :invoices="invoices"></invoice-list>
  </div>
</template>

<script>
import InvoiceList from "../components/InvoiceList.vue";
import Button from "../components/Button";
import { Event } from "../utils/Event";

export default {
  name: "Home",
  components: {
    InvoiceList,
    Button,
  },
  data() {
    return {
      invoices: [],
    };
  },
  created() {
    this.axios.get("http://localhost:3001/invoices").then((res) => {
      this.invoices = res.data;
    });

    Event.listen("createInvoice", () => {
      alert("create");
    });
  },
};
</script>

<style lang="scss">
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  & > h2 {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.625px;

    & > span {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
      color: var(--gray-blue);
    }
  }

  &__actions {
    display: flex;
  }
}
</style>

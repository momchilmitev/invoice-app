<template>
  <div>
    <section class="info">
      <h2>
        Invoices
        <span>{{ invoices.length ? invoices.length : 0 }} invoices</span>
      </h2>
      <div class="info__actions">
        <InvoiceFilter></InvoiceFilter>
        <Button
          text="New"
          modiffier="create"
          eventName="createInvoice"
        ></Button>
      </div>
    </section>
    <invoice-list :invoices="filteredInvoices"></invoice-list>
  </div>
</template>

<script>
import InvoiceList from "../components/InvoiceList.vue";
import Button from "../components/Button";
import InvoiceFilter from "../components/InvoiceFilter";
import { Event } from "../utils/Event";

export default {
  name: "Home",
  components: {
    InvoiceList,
    Button,
    InvoiceFilter,
  },
  data() {
    return {
      invoices: [],
      filters: [],
    };
  },
  created() {
    this.axios.get("http://localhost:3001/invoices").then(res => {
      this.invoices = res.data;
    });

    Event.listen("createInvoice", () => {
      alert("create");
    });

    Event.listen("filter", filters => {
      this.filters = filters;
    });
  },
  computed: {
    filteredInvoices() {
      if (this.filters.length > 0) {
        return this.invoices.filter(invoice =>
          this.filters.includes(invoice.status)
        );
      } else {
        return this.invoices;
      }
    },
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
    align-items: center;
  }
}
</style>

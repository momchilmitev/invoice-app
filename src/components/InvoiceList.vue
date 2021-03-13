<template>
  <section>
    <invoice-item
      v-for="invoice in invoices"
      :key="invoice.id"
      :invoice="invoice"
    ></invoice-item>
  </section>
</template>

<script>
import InvoiceItem from "./InvoiceItem.vue";

export default {
  name: "invoice-list",
  props: ["invoices"],
  components: {
    InvoiceItem,
  },
};
</script>

<style lang="sass"></style>

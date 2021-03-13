<template>
  <invoice-list :invoices="invoices"></invoice-list>
</template>

<script>
import InvoiceList from "../components/InvoiceList.vue";

export default {
  name: "Home",
  components: {
    InvoiceList,
  },
  data() {
    return {
      invoices: null,
    };
  },
  created() {
    this.axios.get("http://localhost:3001/invoices").then((res) => {
      this.invoices = res.data;
    });
  },
};
</script>

<template>
  <div class="view">
    <InvoiceView :invoiceId="id"></InvoiceView>
  </div>
</template>

<script>
import InvoiceView from "../components/InvoiceView";
export default {
  components: {
    InvoiceView,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

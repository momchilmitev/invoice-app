<template>
  <div>
    <section class="info">
      <h2>
        Invoices
        <span>{{ invoices.length }} invoices</span>
      </h2>
      <div class="info__actions">
        <div>Filter</div>
        <button>New</button>
      </div>
    </section>
    <invoice-list :invoices="invoices"></invoice-list>
  </div>
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

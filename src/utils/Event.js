import Vue from "vue";

export const Event = new (class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }

  stop(event) {
    this.vue.$off(event);
  }
})();

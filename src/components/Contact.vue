<template>
  <div class="card px-4 py-3">
    <div class="card-body">
      <h5>বিলিং ইনফো</h5>

    </div>
  </div>
  <BkashPayment/>
</template>

<script>

import BkashPayment from '@/components/BkashPayment.vue';

export default {
  name: "Contact",
  components: {
    BkashPayment,
  },


}
</script>

<style scoped>
h5 {
  font-size: 24px;
  line-height: 1.666;
  color: #232c6c;
  margin-bottom: 1rem;
}

.required {
  color: #e42234;
  border: 0;
  border-bottom: none !important;
  cursor: inherit !important;
  text-decoration: none !important;
}
</style>
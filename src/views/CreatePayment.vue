<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Contact from '@/components/Contact.vue';
</script>


<template>
  <NavBar/>
  <div class="container-fluid">
    <div class="row mt-6">
      <div class="col-lg-7">
        <Contact/>

      </div>
      <div class="col-lg-5">
        <div class="card px-4 py-3">
          <div class="card-body">
            <h5>এক নজরে আপনার অর্ডার</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.container-fluid {
  width: 95% !important;
}

.card {
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0px !important;
}

label {
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 600;
  color: #232c6a;
}

h5 {
  font-size: 24px;
  line-height: 1.666;
  color: #232c6c;
  margin-bottom: 1rem;
}
</style>

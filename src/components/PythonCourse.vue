<template>
  <div class="mt-5">
    <h3 class="section-title extend">এক্সক্লুসিভ <strong>লাইভ কোর্স</strong></h3>
    <div class="row mt-5">
      <div class="col-lg-3 col-sm-12 col-md-6">
        <div class="card">
          <img alt="Image placeholder" src="./icons/Python-Symbol.png" class="img-fluid course-img bg-gradient-dark
          opacity-6">
          <div class="card-body">
            <a href="#" class="d-block h5">Python Programming for Beginners</a>
            <h5 class="mt-4"><span class="woocommerce-Price-currencySymbol text-dark">৳&nbsp;</span>4,000</h5>

            <div class="d-flex align-items-center justify-content-between">
              <div>
                <span class="text-sm text-muted mt-4 mb-0">Class start: .....</span>
              </div>
            </div>
            <p class="mt-3"><a href="https://docs.google.com/document/d/1cz6K8m4qRJxWdEVpaQfeo4x_MzSkVkQRmevBw0R4gbs/edit?usp=sharing"><u><img
                 src="../assets/icons/link.png" alt=""> সিলেবাস দেখুন</u></a></p>
            <button type="button" class="btn btn-secondary disabled mt-2 w-100">
              রেজিস্ট্রেশন বন্ধ আছে
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PythonCourse"
}
</script>

<style scoped>
.section-title {
  font-size: 32px;
  line-height: 1;
  margin-right: 20px;
  color: #343b6d;
}

.card {
  border-radius: 10px;
}
img{
  height: 30px;
}
.course-img {
  height: 10rem;
  width: 100%;
}

@media (min-width: 992px) {
  .col-lg-3 {
    flex: 1 0 30%;
    max-width: 41%;
  }
}
@media (min-width: 1030px) {
  .col-lg-3 {
    flex: 1 0 30%;
    max-width: 27%;
  }
}
</style>
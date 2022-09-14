<template>
  <nav class="social">
    <ul>
      <li><a href="https://www.fractalslab.com">Our Website<img src="../assets/icons/web-66.png" alt="aws learning"></a></li>
    </ul>
  </nav>
  <footer class="card">
    <div class="container-fluid">
      <div class="card-body">
        <div class="row justify-content-between">
          <div class="col-lg-4">
            <h4 class="widget-title">Fractalslab সম্পর্কিত</h4>
            <p class="textwidget">Fractalslab হলো যেকোনো বয়সের শিক্ষার্থী, প্রফেশনাল ও ফ্রিল্যান্সারদের জন্য দেশসেরা
              স্কিল ডেভেলপমেন্ট
              সল্যুশন। অভিজ্ঞ ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়ে বানানো এর ক্যারিয়ার ট্র্যাক প্রোগ্রাম ও লাইভ কোর্সগুলো
              যে কাউকে প্রস্তুত করবে দেশে-বিদেশে সফল ক্যারিয়ার গড়তে।</p>
          </div>
          <div class="col-lg-5">
            <h4 class="widget-title">আমাদের কোর্সসমূহ</h4>
            <p class="textwidget">Python</p>

            <div class="d-flex align-items-center contact">
              <img alt="Image placeholder" src="./icons/call-icon.png"
                   class="">
              <div class="avatar-content ml-3">
                <h6 class="mb-0">সাপোর্ট সেন্টার</h6>
                <p class="mt-1">(+880) 17660-16431</p>
                <span>(10 AM - 05 PM)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer.Vue"
}
</script>

<style scoped>
img {
  height: 25px;
}
.contact img{
  height: 60px;
}
a {
  color: #fff;
  text-decoration: none;
}

.social {
  position: fixed;
  top: 81px;
}

.social ul {
  padding: 0px;
  transform: translate(-270px, 0);
}

.social ul li {
  display: block;
  margin: 5px;
  background: rgba(0, 0, 0, 0.36);
  width: 300px;
  text-align: right;
  padding: 10px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
}

.social ul li:hover {
  transform: translate(110px, 0);
  background: rgba(255, 255, 255, 0.4);
}

.social ul li:hover a {
  color: #000;
}

.social ul li:hover i {
  color: #fff;
  background: rgba(0, 0, 0, 0.36);
  transform: rotate(360deg);
  transition: all 1s;
}

.social ul li i {
  margin-left: 10px;
  color: #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 20px;
  background: #ffffff;
  transform: rotate(0deg);
}

body {
  background: #4F8B89;
  color: #fff;
  font-family: 'Raleway', sans-serif;
}

.container-fluid {
  width: 95% !important;
}

.card {
  margin-top: 4rem;
  background-color: #d8e0e2;
}

.widget-title {
  color: #343B6D;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 700;
  padding-left: 0;
  border: 0;
}

.textwidget {
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  color: #474e84;
}

.contact {
  margin-top: 5rem;
}

.contact p {
  color: #474e84;
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 10px;
}

.contact h6 {
  color: #474e84;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
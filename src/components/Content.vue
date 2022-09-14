<template>
  <div class="row mt-5">
    <div class="col-lg-4">
      <div class="card bg-white">
        <div class="card-body py-1">
          <h5 class="card-title">Q. কোর্সটি কাদের জন্য ?</h5>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            যাদের AWS পাবলিক ক্লাউড গভীর আগ্রহ রয়েছে</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            যারা বিনামূল্যে API ব্যাকএন্ড তৈরি করতে চায়</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            ব্যাকএন্ড ওয়েব ডেভেলপমেন্ট সম্পর্কে কিছু ধারণা আছে</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            বিভিন্ন AWS সার্টিফিকেশন পরীক্ষা দিতে চান</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card bg-white">
        <div class="card-body py-1">
          <h5 class="card-title">Q. এই কোর্স থেকে আপনি কি শিখবেন?</h5>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            সম্পূর্ণ সার্ভারলেস ব্যাকএন্ড তৈরি করতে পারবেন</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> ১০০% বিনামূল্যে REST API ডেভেলপমেন্ট করতে পারবেন
          </p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> AWS সার্ভিস গুলি শিখতে পারবেন</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> সার্ভারলেস অ্যাপ্লিকেশন সম্পর্কে জানতে পারবেন
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card bg-white">
        <div class="card-body py-1">
          <h5 class="card-title">Q. আপনি এই কোর্সের আপনার জ্ঞান কোথায় প্রয়োগ
            করবেন?</h5>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            এই কোর্সটি AWS জগতে প্রবেশের একটি রাস্তার মতো</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            অনেক কোম্পানি রয়েছে যারা AWS এর বিভিন্ন সার্ভিস নিয়ে কাজ করে তাদের সাথে
            কাজ করতে
            পারবেন</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning">
            আপনার জ্ঞান যেকোনো কোম্পানিকে REST API তৈরি করতে সাহায্য করবে।</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center mt-2 nd-row">
    <div class="col-lg-4 col-md-6">
      <div class="card lg-card bg-white">
        <div class="card-body py-1">
          <h5 class="card-title">Q. কোর্সের কালচার কি?</h5>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> প্রতি সপ্তাহে ২ দিন লাইভ সেশন</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> আপনার কর্মজীবনকে এগিয়ে নেওয়ার জন্য নিজেকে
            প্রকাশ করার একটি
            সুযোগ</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> প্রতিটি সেশনে শিক্ষকের সাথে হ্যান্ডস-অন এবং লাইভ
            কোডিং এর
            সুযোগ রয়েছে</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> আপনার শেখার কার্যকারিতা নিশ্চিত করার জন্য রয়েছে
            অ্যাসাইনমেন্ট।</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> AWS ক্যারিয়ার রিলেটেড কিছু লাইভ সেশন</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> প্রতিটি লেকচারের শেষে প্রশ্ন করে বুঝে নিতে
            পারবেন</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card bg-white">
        <div class="card-body py-1">
          <h5 class="card-title">Q. এই কোর্সের পূর্বশর্ত কি ?</h5>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> সপ্তাহে কমপক্ষে ৮ ঘন্টা সময় দিতে হবে</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> ক্রেডিট/ডেবিট/প্রিপেইড কার্ড</p>
          <p><img src="../assets/icons/correct.png" alt="aws learning"> উচ্চ মানের ইন্টারনেট গতি</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
.card-title {
  text-align: center;
  margin-top: 3rem;
}

p {
  color: #000000 !important;
}

.card {
  border-radius: 10px;
}

img {
  height: 20px;
}

@media (max-width: 1488px) {
  .nd-row .col-lg-4 {
    flex: 1 0 41.66667%;
    max-width: 50%;
  }
}

@media (max-width: 991px) {
  .nd-row .col-lg-4 {
    flex: auto;
    max-width: 100% !important;
  }
}

@media (min-width: 990px) {
  .card {
    height: 27rem;
    padding: 0rem 0rem 0rem 1rem;
  }
}

@media (max-width: 555px) {
  .card {
    height: auto;
  }
}
</style>
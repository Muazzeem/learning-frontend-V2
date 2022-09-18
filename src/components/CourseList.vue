<template>
  <div class="row body">
    <div class="col-lg-6 col-sm-12">
      <h1>AWS for Beginners</h1>
      <p class="text-dark">
        কেমন হবে আপনি যদি আপনার ওয়েবসাইট এর জন্য ফ্রি REST API ব্যবহার করতে পারেন? আপনাকে প্রতি মাসে, একটি নির্দিষ্ট
        সীমা
        পর্যন্ত, সার্ভার ও ডাটাবেসের জন্য গুনতে হবে না কোনো টাকা আজীবনের জন্য। হ্যাঁ, আপনি ঠিকই পড়েছেন। এই কোর্সে আপনি
        এমন
        কিছু টেকনোলজি নিয়ে জানবেন।আপনি যে ওয়েবসাইটে ভিজিট করছেন সেটিও একটি সার্ভারলেস ওয়েবসাইট। আমাদের এই কোর্সের
        মাধ্যমে
        আপনিও এমন ওয়েবসাইট তৈরি করতে পারবেন একদম বিনামূল্যে। আপনি যদি অল্প কিছু প্রোগ্রামিং জানেন যেমন: python3.8,
        node.js
        তাহলে আপনিও হতে পারবেন ভালো একজন ব্যাকএন্ড ডেভেলপার। আমরা আছি আপনার ক্যারিয়ারের পথে।
      </p>
      <Video/>
    </div>
    <div class="col-lg-5 offset-lg-1 mt-6 col-md-12 col-sm-12">
      <div class="card course-card">
        <div class="card-body">
          <h5 class="h4 text-white">এই কোর্সের ভেতরে যা যা রয়েছে</h5>

          <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-12">
              <span><img class="custom-icon" src="../assets/icons/clock.png" alt="aws learning"> ১০ ঘন্টা ভিডিও লেকচার</span> <br>
              <span><img class="custom-icon" src="../assets/icons/google-meet.png" alt="aws learning"> সম্পূর্ণ অনলাইন ভিত্তিক ক্লাস <small>(Google Meet)</small></span>
              <br>
              <span><img class="custom-icon" src="../assets/icons/face-to-face.png" alt="aws learning"> সরাসরি প্রশ্নোত্তর সেশনের জন্য ৩০ মিনিট</span>
            </div>
            <div class="col-lg-5 col-md-7 col-sm-12">
              <span><img class="custom-icon" src="../assets/icons/lecturer.png" alt="aws learning"> ৮ টি লেকচার সেশন</span> <br>
              <span><img class="custom-icon" src="../assets/icons/calendar.png" alt="aws learning"> ১ মাস কোর্সের সময়সীমা</span> <br>
              <span><img class="custom-icon" src="../assets/icons/mentor.png" alt="aws learning"> মেন্টর সাপোর্ট </span>
            </div>
          </div>

          <div class="card perches-card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h5 class="text-white">কোর্সের মূল্য</h5>
                </div>
                <div>
                  <h4 class="text-white">৳ ৫০০</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buy-btn">
          <div class="d-flex buy-btn justify-content-between">
            <div class="p-2">
              <ContactModal/>
            </div>
            <div class="p-2">
              <a href="https://www.youtube.com/watch?v=cUpAsCbyFWg&list=PLIjLbsAsfOMeas_X7eve748E88D0MU9ol"
                 target="_blank" type="button"
                 class="btn video-btn text-white btn-icon-label hover-shadow-lg hover-translate-y-n10">
              <span class="btn-inner--icon">
                  <img src="../assets/icons/video-64.png" alt="aws learning">
              </span>
                <span class="btn-inner--text">ফ্রি ডেমো দেখুন</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Video from './Video.vue';
import ContactModal from './ContactModal.vue';

export default {
  name: "CourseList.vue",
  components: {
    Video,
    ContactModal
  }
}
</script>

<style scoped>
.body {
  margin-top: 6rem;
}

.text-dark {
  text-align: justify;
  font-family: 'Rubik', sans-serif;
}

.card {
  background-color: #354795;
}

.video-btn {
  background-color: #5468FF !important;
  color: white;
}

.perches-card {
  margin-top: 1rem;
  border: 0px !important;
  background-color: #495CA9 !important;
}

.perches-card .card-body {
  padding: 0.8rem;
}

span {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 2rem;
  color: white;
}

.custom-icon {
  height: 20px;
}
img{
  height: 40px;
}

@media (min-width: 1025px) {
  .course-card {
    padding: .5rem;
  }
}
@media (max-width: 989px) {
  .course-card {
    padding: .1rem;
  }
}
@media (max-width: 1349px) {
  .offset-lg-1 {
    margin-left: 0px;
  }

  .col-lg-5 {
    flex: 1 0 41.66667%;
    max-width: 50% !important;
  }

  .btn {
    padding: 0.75rem 0.75rem;
  }
}

@media (max-width: 991px) {
  .col-lg-5 {
    flex: 1 0 41.66667%;
    max-width: 100% !important;
  }
}

@media (max-width: 500px) {
  .buy-btn {
    display: inline !important;
  }

  .buy-btn .btn {
    width: 100%;
  }

  .mt-6 {
    margin-top: 1rem !important;
  }

  .card-body {
    padding: 1rem;
  }
}
</style>
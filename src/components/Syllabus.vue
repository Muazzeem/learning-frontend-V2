<template>
  <div class="row mt-4">
    <div class="col-lg-6">
      <h5>কোর্স সিলেবাস</h5>
      <div id="accordion-1" class="accordion accordion-stacked">
        <!-- Accordion card 1 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button"
               data-target="#collapse-1-1"
               aria-expanded="false" aria-controls="collapse-1-1">
            <h6 class="mb-0">সার্ভারলেস</h6>
          </div>
          <div id="collapse-1-1" class="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/video-file.png" alt="aws learning">
                  <a href="https://www.youtube.com/watch?v=B_m6JBTs4yo&t=1s" data-toggle="tooltip"
                     data-placement="bottom"
                     title="What is serverless?"
                     data-fancybox> সার্ভারলেস কি ?</a></li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> এই ওয়েবসাইটের ব্লক ডায়াগ্রাম নিয়ে আলোচনা
                  করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> সার্ভারলেস স্কেল কি এবং কিভাবে কাজ করে ?
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 2 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button"
               data-target="#collapse-1-2"
               aria-expanded="false" aria-controls="collapse-1-2">
            <h6 class="mb-0">ল্যাম্বডা</h6>
          </div>
          <div id="collapse-1-2" class="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/video-file.png" alt="aws learning">
                  <a href="https://youtu.be/B_m6JBTs4yo" data-toggle="tooltip" data-placement="bottom"
                     title="What is lambda?"
                     data-fancybox> ল্যাম্বডা কি?</a></li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা ফাংশন তৈরি</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> EC2 vs Lambda</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা ফাংশনের মেমোরী এবং সময় সীমা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা ইভেন্ট কি ?</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা log দেখা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা ফাংশন জন্য একটি টেস্ট পেলোড তৈরি
                  করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> AWS কনসোল থেকে একটি ল্যাম্বডা ফাংশন চালানো
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা ফাংশনকে পারমিশন দেওয়ার জন্য IAM
                  রোল তৈরি করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা async ইনভোকেশন</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা রিট্রাই পলিছি</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ডেড লেটার কিউ (DLQ) এবং এর ব্যবহার</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ফেল ফাংশনগুলির ইভেন্ট হতে ডেড লেটার কিউ
                  (DLQ) তে রাখা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা কনকারেন্সি এবং কনকারেন্সি
                  রিজারভেশন
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> পভিশন কনকারেন্সি রিজারভেশন</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডার সীমাবদ্ধতা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডার যে বিষয়গুলো সম্পর্কে সচেতন হতে
                  হবে
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা নিয়ে সমস্যা সমাধান</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা বিলিং বিবরণ</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 3 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button"
               data-target="#collapse-1-3"
               aria-expanded="false" aria-controls="collapse-1-3">
            <h6 class="mb-0">API গেটওয়ে</h6>
          </div>
          <div id="collapse-1-3" class="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/video-file.png" alt="aws learning">
                  <a href="https://youtu.be/7LQhWEXDAck" data-toggle="tooltip" data-placement="bottom"
                     title="What is lambda?"
                     data-fancybox> API গেটওয়ে & REST API</a></li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> একটি রিসোর্সে এবং API মেথড তৈরি করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> একটি API মেথড এর সাথে ল্যাম্বডা ফাংশান যোগ
                  করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা প্রক্সি ইন্টিগ্রেশন</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ল্যাম্বডা CORS এনাবল</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> API গেটওয়ে authorizer</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Dev স্টেজিং এ API ডেপ্লয় করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Postman দ্বারা API টেস্ট করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> কিভাবে API গেটওয়ে বিল করে থাকে ?</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 4 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-4" data-toggle="collapse" role="button"
               data-target="#collapse-1-4"
               aria-expanded="false" aria-controls="collapse-1-4">
            <h6 class="mb-0">সার্ভারলেস ফ্রেমওয়ার্ক</h6>
          </div>
          <div id="collapse-1-4" class="collapse" aria-labelledby="heading-1-4" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/file.png" alt="aws learning"> সার্ভারলেস ফ্রেমওয়ার্ক কি ?</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> সার্ভারলেস ফ্রেমওয়ার্ক কিভাবে কাজ করে ?
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> পাইথন দিয়ে সার্ভারলেস প্রজেক্টে একটি
                  serverless.yml ফাইল
                  তৈরি করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> সার্ভারলেসের মাধ্যমে ল্যাম্বডা ফাংশন এবং API
                  গেটওয়ে ট্রিগার
                  এড করা
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> কমান্ড এর মাধ্যমে লগ এক্সেস করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ব্যাসিক কমান্ড সম্পর্কে জানা</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 5 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-5" data-toggle="collapse" role="button"
               data-target="#collapse-1-5"
               aria-expanded="false" aria-controls="collapse-1-5">
            <h6 class="mb-0">CI/CD</h6>
          </div>
          <div id="collapse-1-5" class="collapse" aria-labelledby="heading-1-5" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/file.png" alt="aws learning"> CI কি এবং এর গুরুত্ব</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ইউনিট টেস্টিং এবং সুবিধা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> পাইথনে PEP8 কনভেনশন</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Github একশন</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Github এ একটি ট্রিগার যোগ করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Github একশন ব্যবহার করে অটোম্যাটে CI</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> কিভাবে CI সর্বোচ্চ কোডিং স্ট্যান্ডার্ড এবং
                  ওয়ার্কফ্লো
                  নিশ্চিত করে
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 6 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-6" data-toggle="collapse" role="button"
               data-target="#collapse-1-6"
               aria-expanded="false" aria-controls="collapse-1-6">
            <h6 class="mb-0">ডায়নামোডিবি</h6>
          </div>
          <div id="collapse-1-6" class="collapse" aria-labelledby="heading-1-6" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/video-file.png" alt="aws learning">
                  <a href="https://youtu.be/7LQhWEXDAck" data-toggle="tooltip" data-placement="bottom"
                     title="What is lambda?"
                     data-fancybox> ডায়নামোডিবি কি ?</a></li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> একটি টেবিল তৈরি করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ডায়নামোডিবির ডাটা রিড এবং রাইট করার capacity
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ম্যানুয়ালি রেকর্ড তৈরি করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ডায়নামোডিবি পার্টিশন-কী এবং শর্ট-কী</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> গ্লোবাল এবং সেকেন্ডারি ইনডেক্সিং</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Scan vs query</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ডায়নামোডিবি, ল্যাম্বডা ফাংশন এবং boto3</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> CRUD অপারেশন এবং ডায়নামোডিবি টেবিল</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> গশর্তসাপেক্ষ ডাটা রাইট করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Postman দ্বারা API টেস্ট করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> ডায়নামোডিবির বিলিং বিবরণ</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 7 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-7" data-toggle="collapse" role="button"
               data-target="#collapse-1-7"
               aria-expanded="false" aria-controls="collapse-1-7">
            <h6 class="mb-0">যে সব শিখতে পারবেন</h6>
          </div>
          <div id="collapse-1-7" class="collapse" aria-labelledby="heading-1-7" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/file.png" alt="aws learning"> API এ লোড এবং স্ট্রেস পরীক্ষা করা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> Python স্ক্রিপ্ট দিয়ে ১০০০টি POST রিকোয়েস্ট
                  তৈরি করতে পারবেন
                </li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> বিভিন্ন প্যারামিটার পরিবর্তন করা
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accordion card 7 -->
        <div class="card">
          <div class="card-header py-4" id="heading-1-8" data-toggle="collapse" role="button"
               data-target="#collapse-1-8"
               aria-expanded="false" aria-controls="collapse-1-7">
            <h6 class="mb-0">এরপর কি</h6>
          </div>
          <div id="collapse-1-8" class="collapse" aria-labelledby="heading-1-7" data-parent="#accordion-1">
            <div class="card-body">
              <ul>
                <li><img src="../assets/icons/file.png" alt="aws learning"> মাইক্রোসার্ভিস ডিজাইন করাা</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> পর্যবেক্ষণ এবং লগিং</li>
                <li><img src="../assets/icons/file.png" alt="aws learning"> সার্ভারলেস স্কেল অন-ডিমান্ড কিভাবে
                  পর্যবেক্ষণ করা যায়
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <h5>আপনি যার কাছ থেকে শিখবেন</h5>
      <Teacher/>
    </div>
  </div>
  <Pricing/>
</template>

<script>
import Teacher from './Teacher.vue';
import Pricing from "./Pricing.vue";

export default {
  name: "Syllabus.vue",
  components: {
    Teacher,
    Pricing
  }
}
</script>

<style scoped>
li {
  font-size: inherit !important;
  color: #0b0f13;
}

ul {
  list-style: none;
  padding: 0px;
}

li {
  line-height: 2.2rem;
}

img {
  height: 20px;
}

@media (max-width: 500px) {
  h5 {
    margin-top: 2rem;
  }
}
</style>
<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center">
        <img alt="Image placeholder" src="./icons/teacher.jpg"
             class="avatar rounded-circle avatar-lg">

        <div class="avatar-content ml-3">
          <h5 class="mb-3">মোঃ সাইফুল ইসলাম</h5>
          <div class="sm-icon">
            <div class="d-flex justify-content-around">
              <div>
                <a target="_blank" href="https://www.facebook.com/mr.saiful.azad">
                  <img src="../assets/icons/facebook-48.png" alt="saiful azad"></a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCDSgZ1hkrD6lKu1dL7AKIfQ">
                  <img src="../assets/icons/youtube-48.png" alt="saiful azad"></a>
              </div>
              <div>
                <a target="_blank" href="https://www.facebook.com/mr.saiful.azad">
                  <img src="../assets/icons/linkedin.png" alt="saiful azad"></a>
              </div>
            </div>
          </div>

          <div class="social-btn">
            <a target="_blank" href="https://www.facebook.com/mr.saiful.azad" type="button" class="btn btn-sm btn-facebook btn-icon-label">
            <span class="btn-inner--icon">
                <img src="../assets/icons/facebook-48.png" alt="saiful azad">
            </span>
              <span class="btn-inner--text">Facebook</span>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCDSgZ1hkrD6lKu1dL7AKIfQ" type="button"
               class="btn btn-sm btn-youtube btn-icon-label">
              <span class="btn-inner--icon">
                  <img src="../assets/icons/youtube-48.png" alt="saiful azad">
              </span>
              <span class="btn-inner--text">Youtube</span>
            </a>
          </div>
        </div>
      </div>
      <p class="text-dark mt-3">
        একজন AWS সার্টিফাইড সলিউশন আর্কিটেক্ট (অ্যাসোসিয়েট)। AWS ক্লাউডে তার ৪ বছরের অধিক অভিজ্ঞতা রয়েছে। তিনি
        অত্যন্ত পরোপকারি এবং তার স্টুডেন্টদের প্রতি নিবেদিত। এই কোর্সে এনরোল এর মাধ্যমে একটা সোশ্যাল নেটওয়ার্ক তৈরি
        হবে যা আপনাদের পরবর্তী ভালো চাকরি পেতে ভূমিকা রাখবে।
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher"
}
</script>

<style scoped>

.avatar-lg {
  width: 130px;
  height: 130px;
}
img{
  height: 30px;
}
.btn-sm {
  padding: 0.5rem 0.50rem;
}

.btn-icon-label .btn-inner--text:not(:first-child) {
  padding-left: 2em;
}

.btn-icon-label .btn-inner--icon {
  width: 2rem;
}

@media (max-width: 585px) {
  .social-btn {
    display: none;
  }
  h5{
    font-size: 1rem;
  }
  p{
    text-align: justify;
  }
}

.sm-icon {
  font-size: 32px;
}

.fa-youtube-play {
  color: red;
}

.fa-facebook-official {
  color: blue;
}

@media (min-width: 585px) {
  .sm-icon {
    display: none;
  }
}

@media (max-width: 425px) {
  .avatar-lg {
    width: 60px;
    height: 68px;
  }

  .mb-3 {
    margin-bottom: 0px !important;
  }

  .sm-icon {
    font-size: 26px;
  }
}
</style>
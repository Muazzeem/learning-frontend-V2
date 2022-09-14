<template>
  <div class="card">
    <div class="animate-this">
      <a href="https://www.youtube.com/watch?v=-7Fd585bFr8" data-toggle="tooltip" data-placement="bottom"
         title="Play Video"
         data-fancybox>
        <div class="">
          <img alt="Image placeholder" src="./icons/learning.jpeg" class="card-img-top">
        </div>
        <span class="mask bg-dark opacity-5"></span>
        <div class="card-img-overlay d-flex flex-column align-items-center p-0">
          <div class="overlay-text text-center video-icon p-2">
            <img class="hover-translate-y-n10" src="../assets/icons/circled-play.png" alt="">
          </div>
          <div class="overlay-text mt-auto p-2">
            <p class="text-white">AWS 3D infrastructure design for our webapp by cloudcraft</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video"
}
</script>

<style scoped>
.card-img-top {
  height: 21rem;
}

.video-icon {
  margin-top: 14%;
}

@media (max-width: 425px) {
  .card-img-top {
    height: 14rem;
  }
  .video-icon img{
    height: 60px;
  }
}
</style>
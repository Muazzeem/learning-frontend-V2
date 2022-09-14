<template>
  <nav class="navbar navbar-horizontal navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">Fractalslab</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbar-primary"
              aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-primary">
        <ul class="navbar-nav ml-lg-auto">
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="">Discover<span class="sr-only">(current)</span></a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="">Courses</a>-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar.vue"
}
</script>

<style scoped>
.navbar {
  background-color: #354895 !important;
  color: white;
  position: fixed !important;
}

.navbar-brand {
  color: white !important;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
}
</style>
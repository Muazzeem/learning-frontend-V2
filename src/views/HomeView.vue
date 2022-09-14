<script setup>
import NavBar from '@/components/NavBar.vue';
import CourseList from '@/components/CourseList.vue';
import Syllabus from '@/components/Syllabus.vue';
import Footer from '@/components/Footer.vue';
import Content from '@/components/Content.vue';
import PythonCourse from '@/components/PythonCourse.vue';

</script>

<template>
  <NavBar></NavBar>
  <div class="container-fluid">
    <CourseList/>
    <Syllabus/>
    <Content/>
    <PythonCourse/>
  </div>
  <Footer/>
</template>
<style scoped>
.container-fluid {
  width: 90% !important;
}

@media (max-width: 1024px) {
  .container-fluid {
    width: 100% !important;
  }
}
</style>
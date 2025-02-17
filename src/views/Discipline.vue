<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

// const response = axios.get('/v1/rules')

// rules.value = resposnse.data.rules



//array for rules
const rules = ref([
  'Silence must be observed at all times. Use of mobile phones is prohibited. Please put them on vibration mode',
  'Good order must be observed in the Library e.g. placing of feet on furniture, removal of shirts, wearing of caps, flip flops, and hats, eating or sleeping in the Library are forbidden',
  'Smoking, eating, and the use of open fire in any part of the Library is prohibited',
  'Cases, parcels, overcoats, etc., must be left in the baggage area'
])
</script>
<template>
  <Navbar />
  <!-- END nav -->


  <div class="container">

    <div class="  text-center ">
      <h1 class="mb-2 bread">Discipline</h1>
      <p class="breadcrumbs text-center"><span class="mr-2"><a href="/">Home <i
              class="fa fa-chevron-right"></i></a></span> <span>Discipline <i class="fa fa-chevron-right"></i></span>
      </p>
    </div>
  </div>


  <div class="text-center">
    <h2>Library Rules</h2>
    <ol>
      <li v-for="(rule, index) in rules" :key="index">
        {{ rule }}
      </li>
    </ol>
  </div>

  <Footer />

  <!-- loader -->
  <!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->
</template>
<style>
.text-center {
  text-align: center;
  /* Centers the text */
  font-family: Arial, sans-serif;
}

ol {
  display: inline-block;
  /* Aligns the list to the center */
  text-align: left;
  /* Keeps list items left-aligned for better readability */
  margin: 0 auto;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
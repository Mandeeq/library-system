<script setup>
import Footer from '@/components/Footer.vue';
import Info from '@/components/info.vue';
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';

const message = ref([
  'Technical University Of Mombasa Library fully identifies with the quality objectives of the university as outlined in its quality policy. The library is committed to empowering the university to achieve its mission of offering accessible quality training, research and innovation in order to produce leaders in the fields of agriculture, engineering, technology, enterprise development, built environment, health sciences, social sciences and other applied sciences to suit the needs of a dynamic world by providing speedy and timely access to relevant, current and quality information resources for teaching, learning, research and innovation. The library vision is to create an information system based on state of the art technology to promote scholarship. In order to deliver quality services that consistently meet and endevour to exceed the expectations of our users we strive to uphold the core values of the university which focuses on quality, collegiality, teamwork, accountability, professionalism, integrity, patriotism, dynamism, innovation and transparency.',
  'The library boasts of a print book stock of 130, 000 volumes spread across all the university campuses whose bibliographic details can be accessed by staff and students in all the campuses via online public access catalogue (OPAC). To cater for diverse information seeking behaviors of our library users while putting into cognizant the ever growing student, staff numbers and different learning mode e.g. e-Learning. The library has subscribed to about 75,000 electronic journals and over 163,000 electronic books which are available to our users through the internet and are accessible for use at one’s own convenience. To create awareness of the resources available to enable users make full use of them, the library organizes orientation days for any new library user which is usually beefed up by conducting continuous user education. In addition, the Library does aggressive marketing using various strategies which include social media; organizing sensitization and training programmes which are user tailored and conducts workshops among others. Bonafide TUM library users are encouraged to register as library members so as to get full access to these wealth of resources. Off-campus access all library users are encouraged to fill RemoteX online registration form available in the library website/ through TUM email. To access internet protocol (IP) restricted electronic resources and other university communications, students and staff are encouraged to ensure that they have an active TUM email address.',
  'THANK YOU AND WELCOME'
])

</script>
<template>

  <body>

    <Navbar />
    <!-- END nav -->



    <div class="bg-success ">
      <div class="row no-gutters slider-text align-items-end justify-content-center">
        <div class="  text-center mb-5">
          <h1 class="mb-2 bread">University Librarian Message</h1>
          <p class="" style="text-align: center; margin-bottom: 20px;">
            <span class="mr-2">
              <a href="/" style="color: black; text-decoration: none;">Home <i class="fa fa-chevron-right"></i></a>
            </span>
            <span style="color: #333;">Message <i class="fa fa-chevron-right"></i></span>
          </p>
        </div>
      </div>
    </div>
    <div v-for="(mssge, index) in message" :key="index" class="container1">
      <p>{{ mssge }}</p>


    </div>
    <Footer />


    <!-- loader -->
    <!-- <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> -->


  </body>

</template>
<style>
p {
  margin-bottom: 15px;
  align-content: center;
  color: black;
  text-align: left;
  display: block;

}

.container1 {
  max-width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: #fff;


}

.thank p {
  text-align: center;
}
</style>
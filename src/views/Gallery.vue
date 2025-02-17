<script setup>
import { reactive } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
// vue-easy-lightbox, for more info and examples you can check out https://onycat.com/vue-easy-lightbox/
import VueEasyLightbox from "vue-easy-lightbox";

// Reactive gallery state
const gallery = reactive({
  visible: false,
  index: 0,
  photos: [
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
    "/images/image1.jpg",
  ],
});

// Helper function to show a photo
function showPhoto(index) {
  gallery.index = index;
  gallery.visible = true;
}

// Helper function to hide the lightbox
function handleHide() {
  gallery.visible = false;
}
</script>

<template>
  <!-- Hero -->
  <Navbar />

  <div class="bg-success">
    <div class="container">
      <div class="row no-gutters slider-text align-items-end justify-content-center">
        <div class="col-md-9  text-center mb-5">
          <h1 class="mb-2 bread">Our Gallery</h1>
          <p class="breadcrumbs text-center"><span class="mr-2"><a href="/">Home <i
                  class="fa fa-chevron-right"></i></a></span> <span>Gallery<i class="fa fa-chevron-right"></i></span>
          </p>
        </div>
      </div>
    </div>
  </div>


  <BasePageHeading title="Gallery" subtitle="Clean and easy way to showcase your images.">
    <template #extra>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Plugins</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">Gallery</li>
        </ol>
      </nav>
    </template>
  </BasePageHeading>
  <!-- END Hero -->

  <!-- Page Content -->
  <div class="content overflow-hidden">
    <div class="container-fluid">
      <div class="row items-push">
        <div v-for="(photo, index) in gallery.photos" :key="index" class="col-md-6 col-lg-4 col-xl-3 mb-4">
          <a href="javascript:void(0)" class="img-link img-link-zoom-in img-thumb img-lightbox"
            @click="showPhoto(index)">
            <img class="img-fluid" :src="photo" alt="Photo" />
          </a>
        </div>
      </div>
    </div>
    <VueEasyLightbox :visible="gallery.visible" :index="gallery.index" :imgs="gallery.photos" @hide="handleHide" />
  </div>
  <!-- END Page Content -->
  <Footer />
</template>

<style scoped>
/* Prevent horizontal scrolling */
body,
.content {
  overflow-x: hidden;
}

/* Ensure images are responsive and stay within the container */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>

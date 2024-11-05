<script setup>
// No additional script needed for styling
</script>

<template>
  <div
    id="carouselBasicExample"
    class="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active">
        <img
          src="/images/tum.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Sunset Over the City"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>Empowering Future Innovators</h5>
          <p>Technical University of Mombasa: Where Knowledge Meets Innovation.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="/images/tumlib.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Canyon at Night"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>Building Tomorrow's Leaders Today</h5>
          <p>Committed to Academic Excellence and Professional Development</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="/images/lib2.jpg"
          class="d-block w-100 custom-carousel-image"
          alt="Cliff Above a Stormy Sea"
        />
        <div class="carousel-caption d-none d-md-block custom-carousel-caption">
          <h5>Your Journey to Excellence Begins Here</h5>
          <p>Fostering Skills and Competencies for a Dynamic World</p>
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
/* Custom styles to reduce the image height */
.custom-carousel-image {
  height: 900px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image scales correctly within the container */
  filter: brightness(50%); /* Makes the image appear dull */
}

/* Custom styles for the caption text */
.custom-carousel-caption {
  color: white !important; /* Sets the text color to white */

}
.carousel-caption.custom-carousel-caption h5,
.carousel-caption.custom-carousel-caption p {
  color: white !important; /* Ensure both h5 and p are targeted */
}
.custom-carousel-caption {
  position: absolute; /* Positioning the caption absolutely */
  top: 50%; /* Move the caption to the center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust to center both horizontally and vertically */
  color: white !important; /* Set the text color to white */
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background */
  padding: 10px; /* Add padding for better readability */
  text-align: center; /* Center text */
  font-size: large;
}
.custom-carousel-caption p{
  font-size: 32px;
}
.custom-carousel-caption h5{
  font-size: 42px;
}

</style>

<template>
  <div class="read-more-container">
    <h3>{{ title }}</h3>
    <p class="read-more-intro">
      {{ intro }}
      <span class="read-more-toggle" @click="toggleReadMore">
        {{ isExpanded ? "Read Less" : "Read More" }}
      </span>
    </p>
    <div v-if="isExpanded" class="read-more-content">
      <!-- Loop through fullTexts and display each one -->
      <div v-for="(text, index) in fullTexts" :key="index" class="full-text-item">
        <p>{{ text.content }}</p>
        <!-- PDF Download Link for each text -->
        <a 
          :href="text.pdfUrl" 
          download 
          class="btn btn-primary mt-3">
          Download PDF
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      required: true
    },
    fullTexts: {
      type: Array, // Array of objects containing content and PDF URL
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleReadMore() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.read-more-container {
  font-family: Arial, sans-serif;
}
.read-more-toggle {
  color: green;
  cursor: pointer;
  text-decoration: underline;
}
.read-more-content {
  margin-top: 10px;
}
.full-text-item {
  margin-bottom: 20px; /* Add spacing between text items */
}
</style>

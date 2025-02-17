<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

// Define the FAQ data
const faqsData = ref([
  { Question: 'What is an account?', Answer: 'An account is a personal or organizational record that allows you to access and manage various services, often requiring authentication through a username and password.' },
  { Question: 'How do I create an account?', Answer: 'To create an account, visit the website or application and look for a "Sign Up" or "Create Account" button. Follow the instructions to enter your information and create a username and password.' },
  { Question: 'How do I secure my account?', Answer: 'To secure your account, use a robust and unique password, enable two-factor authentication if available, and be cautious about sharing your login information. Regularly update your password and avoid using easily guessable information like birthdays or names.' },
  { Question: 'What should I do if I forget my password?', Answer: 'If you forget your password, most websites and services offer a "Forgot Password" or "Reset Password" option. Follow the steps to reset your password, often involving an email or SMS verification.' },
  { Question: 'What should I do if my account is compromised or hacked?', Answer: 'If you suspect your account has been compromised, change your password immediately. Contact the service provider for further assistance, and consider enabling two-factor authentication for added security.' },
]);
</script>

<template>

  <body>
    <Navbar />

    <div class="container">
      <div class="text-center">
        <h1 class="mb-2 bread">Discipline</h1>
        <p class="breadcrumbs text-center">
          <span class="mr-2"><a href="/">Home <i class="fa fa-chevron-right"></i></a></span>
          <span>Discipline <i class="fa fa-chevron-right"></i></span>
        </p>
      </div>
    </div>

    <!-- Main Container -->
    <div class="my-5" style="width: 80%; margin: 0 auto;">
      <!-- FAQ Intro -->
      <section class="bsb-faq-3 py-0 py-md-5 py-xl-8" style="max-width: 100%;">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">Frequently Asked Questions</h2>
              <p class="text-secondary text-center lead fs-4">Welcome to our FAQ page, your one-stop resource for
                answers to commonly asked questions.</p>
              <p class="mb-5 text-center">Whether you're a new customer looking to learn more about what we offer or a
                long-time user seeking clarification on specific topics, this page has clear and concise information
                about our products and services.</p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
            </div>
          </div>
        </div>

        <!-- FAQs: Your Account -->
        <div class="mb-8">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-11 col-xl-10">
                <div class="d-flex align-items-end mb-5">
                  <i class="bi bi-person-gear me-3 lh-1 display-5"></i>
                  <h3 class="m-0">Your Account</h3>
                </div>
              </div>
              <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqAccount">
                  <!-- Dynamically generate FAQ items -->
                  <div v-for="(faq, index) in faqsData" :key="index"
                    class="accordion-item bg-transparent border-top border-bottom py-0">
                    <h2 class="accordion-header" :id="`faqAccountHeading${index + 1}`">
                      <button class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button" data-bs-toggle="collapse" :data-bs-target="`#faqAccountCollapse${index + 1}`"
                        aria-expanded="false" :aria-controls="`faqAccountCollapse${index + 1}`">
                        {{ faq.Question }}
                      </button>
                    </h2>
                    <div :id="`faqAccountCollapse${index + 1}`" class="accordion-collapse collapse"
                      :aria-labelledby="`faqAccountHeading${index + 1}`" data-bs-parent="#faqAccount">
                      <div class="accordion-body">
                        <p>{{ faq.Answer }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </body>
</template>
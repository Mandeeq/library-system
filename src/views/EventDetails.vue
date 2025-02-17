<template>
    <div>
      <h1>{{ event.name }}</h1>
      <p>Date: {{ event.date }} {{ event.month }}</p>
      <p>Time: {{ event.time }}</p>
      <p>Location: {{ event.location }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const events = [
    { date: '10', month: 'Mar', name: 'Music Festival', time: '06:00pm - 11:30pm', location: 'Central Park, NYC' },
    { date: '15', month: 'Mar', name: 'Food & Wine Expo', time: '12:00pm - 08:00pm', location: 'Exhibition Center, Paris' },
    { date: '20', month: 'Mar', name: 'Tech Conference 2024', time: '09:00am - 05:00pm', location: 'Silicon Valley' },
    { date: '25', month: 'Mar', name: 'Art Gala Night', time: '07:00pm - 10:00pm', location: 'Modern Art Museum, London' },
    { date: '02', month: 'Apr', name: 'Charity Run', time: '07:30am - 12:00pm', location: 'Bondi Beach, Sydney' },
    { date: '08', month: 'Apr', name: 'Spring Fashion Show', time: '05:00pm - 09:00pm', location: 'Fashion Avenue, Milan' },
    { date: '12', month: 'Apr', name: 'DJ Night with Armin Van Buuren', time: '10:00pm - 02:00am', location: 'Paradise Club, Ibiza' },
  ];
  
  // Get the event details based on the route parameter `id`
  const event = computed(() => events[route.params.id]);
  </script>
  
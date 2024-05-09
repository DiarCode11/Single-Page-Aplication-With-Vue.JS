<template> 
  <Navbar /><!-- Tag untuk Navbar -->
  <RouterView /><!-- Tag untuk menampung view yang di hasilkan -->
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar
    }
  }
</script>
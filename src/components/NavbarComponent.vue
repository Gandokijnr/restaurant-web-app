<template>
  <header class="header-container position-sticky top-0 z-3 pt-3 bg-black py-2 flex-wrap">
    <div class="container  d-flex justify-content-between align-items-center flex-wrap">
        <div class="social-icons d-flex gap-3">
            <i class="bi bi-twitter-x text-white small"></i>
            <i class="bi bi-whatsapp text-white small"></i>
            <i class="bi bi-facebook text-white small"></i>
            <i class="bi bi-linkedin text-white small"></i>
        </div>
        <div class="social-number d-flex justify-content-between align-items-center gap-5">
            <div class="d-flex gap-2">
                <i class="bi bi-telephone-fill text-white"></i>
                <span  class="text-white small">+234 803 234 5678</span>
            </div>
            <div class="d-flex gap-2">
                <i class="bi bi-envelope-fill text-white"></i>
                <span class="text-white small">food@info.com</span>
            </div>
        </div>
    </div>
    <hr class="text-light" />
    <div class="wrapper p-2">
      <nav class="d-flex justify-content-around align-items-center position-sticky top-0 z-3 flex-wrap">
      <div class="nav-logo m-0 p-0">
        <router-link to="" class="text-decoration-none fs-3 text-white m-0">
          <img src="../assets/sitelogo.png" alt="" />
        </router-link>
      </div>
      <div class="nav-content d-flex gap-5 align-items-center">
        <router-link to="/" class="text-decoration-none fs-6 text-white">Home</router-link>
        <router-link to="/FoodVendor" class="text-decoration-none fs-6 text-white">Vendors</router-link>
        <router-link to="" class="text-decoration-none fs-6 text-white">Blog</router-link>
        <router-link to="" class="text-decoration-none fs-6 text-white">Contact</router-link>
      </div>
    </nav>
    </div>
  </header>
</template>


<script>
    export default {
        name: "Navbarcomponent",
        data (){
          return{
            isOpen: false
          }
        }
    }
</script>

<style scoped>
  header .header-container {
    /* background: linear-gradient(to top, rgba(24, 23, 23, 0), rgba(15, 10, 10, 0.5) 100%);
    backdrop-filter: blur(5px) */
    background: black;
  }

  small{
    font-size: 12px;
  }

</style>
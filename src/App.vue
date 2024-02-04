
<template>
<Navbarcomponent />
  <RouterView />
<footerSection />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbarcomponent from '@/components/NavbarComponent.vue'
import footerSection from '@/components/footerSection.vue'
  export default {
    components: { Navbarcomponent, footerSection },
  }
</script>
 
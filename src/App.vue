
<template>
<Navbarcomponent />
  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbarcomponent from '@/components/NavbarComponent.vue'
  export default {
    components: { Navbarcomponent }
  }
</script>
 
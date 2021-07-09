<template>
  <v-app>
    <v-main>
      <Header id="Header"></Header>
      <About id="About"></About>
      <Services id="Services"></Services>
      <Galery id="Galery"></Galery>
      <Contact id="Contact"></Contact>
    </v-main>
  </v-app>
</template>
<script>
import Header from '../src/views/header.vue'
import About from '../src/views/about.vue'
import Services from '../src/views/services.vue'
import Galery from '../src/views/galery.vue'
import Contact from '../src/views/Contact.vue'
export default {
  name: 'App',

  components: {
    Header,
    About,
    Services,
    Galery,
    Contact
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import 'style/_variables.scss';
@import 'style/_vuetifyChanges.scss'
</style>

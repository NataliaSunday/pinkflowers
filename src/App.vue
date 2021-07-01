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
import Header from '../src/views/Header.vue'
import About from '../src/views/About.vue'
import Services from '../src/views/Services.vue'
import Galery from '../src/views/Galery.vue'
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

<template>
    <section class="contact bg-light-pink pb-16">
         <Heading :sectionTitle=title :headingColor=headingColor></Heading>
         <ContactForm></ContactForm>
    </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
import ContactForm from '../components/contactForm.vue'
export default {
  data () {
    return {
      title: 'Contact',
      headingColor: 'heading--white',
    }
  },
  components: {
    Heading,
    ContactForm,
  }
}
</script>
<style lang="scss" scoped>
.contact{
    width: 100vw;
    height: 100vh;
}
</style>

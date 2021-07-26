<template>
   <section class="services bg-white">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
   </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
export default {
  data () {
    return {
      title: 'Services',
      headingColor: 'heading--pink'
    }
  },
  components: {
    Heading
  }
}
</script>
<style scoped>

</style>

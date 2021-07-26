<template>
   <section class="galery bg-white">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
   </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
export default {
  data () {
    return {
      title: 'Galery',
      headingColor: 'heading--white'
    }
  },
  components: {
    Heading
  }
}
</script>
<style lang="scss">
@import '../style/_variables.scss';
.galery{
    width: 100vw;
    height: 100vh;
    position: relative;

    &::after{
        content: '';
        width: 100%;
        height: 100%;
        clip-path: polygon(100% 0, 0% 100%, 0 0);
        position: absolute;
        top: 0;
        left: 0%;
        z-index: 1;
        background-color: $color-light-green;
    }
}

</style>

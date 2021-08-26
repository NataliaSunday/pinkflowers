<template>
   <section class="gallery bg-white pb-16">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
          <v-container class="gallery__photoBox">
            <v-row>
              <v-col
              v-for="n in 6"
              :key="n"
              cols="12"
              sm="2"
           >
           <galleryPhoto :photoNumber="n"></galleryPhoto>
          </v-col>
            </v-row>
             <v-row>
              <v-col
              v-for="n in 6"
              :key="n"
              cols="12"
              sm="2"
           >
          <galleryPhoto :photoNumber="n"></galleryPhoto>
          </v-col>
            </v-row>
          </v-container>

   </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
import galleryPhoto from '../components/galleryPhoto.vue'

export default {
  data () {
    return {
      title: 'Gallery',
      headingColor: 'heading--white',
    }
  },
  components: {
    Heading,
    galleryPhoto
  }
}
</script>
<style lang="scss">
@import '../style/_variables.scss';
.gallery{
    width: 100vw;
    height: min-content;
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
    &__photoBox{
      width: 90%;
      height: 100%;
      position: relative;
      z-index: 2;
    }
}

</style>

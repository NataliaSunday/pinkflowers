<template>
   <section class="gallery bg-white pb-16">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
          <v-container class="gallery__box ">
            <v-row class="d-flex justify-center align-stretch">
              <v-col
              v-for="n in 5"
              :key="n"
              cols="5"
              sm="2"
           >
              <galleryPhoto :photoNumber="n" @showPhoto="showPhoto"></galleryPhoto>
              </v-col>

            </v-row>
            <v-row class="d-flex justify-center align-stretch">
              <v-col
              v-for="n in 5"
              :key="n"
              cols="5"
              sm="2"
              >
              <galleryPhoto :photoNumber="n+5" @showPhoto="showPhoto"></galleryPhoto>
              </v-col>
            </v-row>
          </v-container>

          <transition name="scale">
          <article class="photoModal " v-if="isMagnified" @click="isMagnified = false">
            <img :src='imgUrl' alt="" class="photoModal__photo pa-4" >
         </article>
    </transition>

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
      isMagnified: false,
      imgUrl: ''
    }
  },
  components: {
    Heading,
    galleryPhoto
  },
  methods: {
    showPhoto(img){
      this.isMagnified = true;
      this.imgUrl = img
    }
  }
}
</script>

<style lang="scss" scoped>
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
        z-index: 0;
        background-color: $color-light-green;
    }
    &__box{
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 3;

    }
}
.photoModal{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.85);
  backdrop-filter: blur(5px);
  cursor: pointer;
  &__photo{
    margin: 0 auto;
    display: block;
    max-width: 100vw;
    max-height: 100vh;
  }
}
.scale-enter-active, .scale-leave-active {
  transition: opacity .25s ease-in;
}
.scale-enter, .scale-leave-to{
  opacity: 0;
}

</style>

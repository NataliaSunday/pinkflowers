<template>
    <section class="photo">
      <article class="photoBox">
        <img :src='imgUrl' alt="" class="photoBox__photo" @click="isMagnified = true">
    </article>
    <transition name="scale">
      <article class="photoModal " v-if="isMagnified" @click="isMagnified = false">
           <img :src='imgUrl' alt="" class="photoModal__photo pa-4" >
      </article>
    </transition>
    </section>
</template>
<script>
export default {
  props: {
    photoNumber: Number,
    isMagnified: false,
    isMagnifiedIndex: 1000
  },
  computed: {
    imgUrl(){
      return require('../assets/gallery/' + this.photoNumber + '.jpg')
    }
  },
   mounted() {
    console.log(imgUrl)
  },
}
</script>
<style lang="scss">
.photo{
  width: 100%;
  height: 100%;
}
.photoBox{
    width: 100%;
    height: 100%;
    &__photo{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      border: .75rem solid white;
      box-shadow: rgb(211, 208, 208) 3px 2px 10px;
      cursor: pointer;
      object-fit: cover; 
    }
}
.photoModal{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.75);
  

  &__photo{
    margin: 0 auto;
    display: block;
    max-width: 100vw;
    max-height: 100vh;
   
  }
}
.scale-enter-active, .scale-leave-active {
  transition: opacity .5s ease-in-out;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
    <article class="photoBox">
        <img :src='imgUrl' alt="" class="photoBox__photo">
    </article>
</template>
<script>
export default {
  props: {
    photoNumber: Number
  },
  computed: {
    imgUrl(){
      return require('../assets/gallery/' + this.photoNumber + '.jpg')
    }
  },
   mounted() {
    console.log(imgUrl)
  }
}
</script>
<style lang="scss">
.photoBox{
    width: 100%;
    height: 100%;
    &__photo{
        width: inherit;
        height: inherit;
    }
}

</style>

<template>
      <article class="photoBox">
        <img :src='imgUrl' alt="" class="photoBox__photo" @click="showPhoto(imgUrl)">
    </article>
</template>
<script>
export default {
  props: {
    photoNumber: Number,
  },
  computed: {
    imgUrl(){
      return require('../assets/gallery/' + this.photoNumber + '.jpg')
    }
  },
   methods: {
    showPhoto(img){
      this.$emit('showPhoto', img);
    }
  },
}
</script>
<style lang="scss">

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

</style>

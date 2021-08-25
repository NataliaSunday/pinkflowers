<template>
     <article 
      @mouseover="isHover=true"
      @mouseleave="isHover=false" 
      class="servicePanel d-flex flex-column " 
      :style="{ 'background-image': 'url(' + require('../assets/services/' + imgPath) + ')' }"
 >
       <div class=" servicePanel__overlay d-flex flex-column pb-8 align-center" 
       :class="[isHover ? 'justify-center' : 'justify-end']">
          <h3 class="heading heading--section heading--pink">{{name}}</h3>
          <p v-if="isHover" class="paragraph paragraph--white">{{description}}</p>
          <v-btn>more</v-btn>
      </div> 
    </article>
</template>
<script>

export default {
  data(){
    return {
       isHover: false

    }
  },
  props: {
    name: String,
    imgPath: String,
    description: String,
   }
}
</script>

<style lang="scss">
.servicePanel{
  height:100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &__overlay{
    width: auto;
    height: 100%;
    transition: all 3s ease-in;
  }
}

//transition


/*
.servicePanel__overlay{
  background-color: rgba(0,0,0, 0.25);
  width: 100%;
  height: 100%;
}
.servicePanel::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.25);
    z-index: 2;

  }
  /*/

</style>

<template>
    <article class="servicePanel d-flex flex-column justify-end align-center " :style="{ 'background-image': 'url(' + require('../assets/services/' + imgPath) + ')' }">     
          <div class=" servicePanel__overlay d-flex flex-column justify-end align-center pb-8">
            <h3 class="heading heading--section heading--pink">{{name}}</h3>
            <v-btn>more</v-btn>
          </div>
 
    </article>
</template>
<script>

export default {
  props: {
    name: String,
    imgPath: String,
    description: String,
    isHover: {
      default: false,
      type: Boolean
    }

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
   position: relative;
}
.servicePanel__overlay{
  background-color: rgba(0,0,0, 0.25);
  width: 100%;
  height: 100%;
}
/*
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

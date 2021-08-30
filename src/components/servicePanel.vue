<template>
     <article 
      class="servicePanel " 
      :style="{ 'background-image': 'url(' + require('../assets/services/' + imgPath) + ')' }"
 >
       <div class="servicePanel__overlay pb-8 transition" >
          <h3 class="heading heading--section heading--pink servicePanel__overlay__heading transition">{{name}}</h3>
          <p class="paragraph paragraph--white servicePanel__overlay__paragraph transition">{{description}}</p>
    
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
    width: inherit;
    height: inherit;
    position: relative;  

  &__heading{
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,-50%);
  }
   &__paragraph{
    width: 90%;
    height: 30%;
    position: absolute;
    left: 50%;
    bottom: -50%;
    z-index: -100;
    transform: translate(-50%,-50%);
    opacity: 0;
   }
  }
}

.servicePanel:hover .servicePanel__overlay{
background-color: rgba(0,0,0,.5);
 backdrop-filter: blur(2px);
}

.servicePanel:hover .servicePanel__overlay__heading{
    left: 50%;
    bottom: 50%;
    transform: translate(-50%,-50%)
}
.servicePanel:hover .servicePanel__overlay__paragraph{
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,-50%);
    z-index: 100;
    opacity: 1;
}
.transition{
  transition: all 1s  ease-in-out ;
}
</style>

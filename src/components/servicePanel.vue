<template>
     <article 
      class="servicePanel " 
      :style="{ 'background-image': 'url(' + require('../assets/services/' + imgPath) + ')' }"
 >
       <div class="servicePanel__overlay pb-8 " >
          <h3 class="heading heading--section heading--pink servicePanel__overlay__heading">{{name}}</h3>
          <p class="paragraph paragraph--white servicePanel__overlay__paragraph">{{description}}</p>
    
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
  position: relative;
  &__overlay{
    width: 100%;
    height: 100%;
    transition: all 1s ease-in-out;
    position: relative;
   
   
  &__heading{
  

    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,-50%);
    transition: all 1s  ease-in-out;

    
    
    
  }
   &__paragraph{

    position: absolute;
    left: 50%;
    bottom: -50%;
    z-index: -100;
    transform: translate(-50%,-50%);
    transition: all 1s  ease-in-out .5s;
    opacity: 0;
   }
  }
}

.servicePanel:hover .servicePanel__overlay{
background-color: rgba(0,0,0,.5);
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


/*transition
.servicePanel{
  height:100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &__overlay{
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);

    transition: all 1.5s linear;
   
   &__paragraph{
     display: none;
   }
   
    
  }
}
.servicePanel:hover .servicePanel__overlay{
  background-color: rgba(0,0,0, 0.5);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);


}
.servicePanel:hover .servicePanel__overlay__paragraph{
  display: flex;
}

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

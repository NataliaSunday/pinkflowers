<template>
     <article 
      class="servicePanel " 
      :style="{ 'background-image': 'url(' + require('../assets/services/' + imgPath) + ')' }"
 >
       <div class="servicePanel__overlay pb-8 " >
          <h3 class="heading heading--section heading--pink">{{name}}</h3>
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
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);

    transition: transform 1s linear;
   
   &__paragraph{
     background-color: aqua;
     overflow-y: hidden;
     height: 0;
     transition: display 1s linear;
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
 
  overflow-y:visible;
 
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

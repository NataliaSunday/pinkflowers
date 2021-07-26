<template>
    <article class="servicePanel" :style="{ 'background-image': 'url(' + `${imgPath}` + ')' }"
 >
        <h3 class="heading heading--section heading--pink">{{name}}</h3>
        <v-btn @click="alert(imgPath)">more</v-btn>
    </article>
</template>
<script>

export default {
  props: {
    name: String,
    imgPath: String,
    description: String,

  },
  mounted() {
    console.log(this.imgPath)
    console.log(this.name)
   
  }

}
</script>
<style lang="scss">
.servicePanel{
  height: 500px;
  width: 500px;
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}

</style>

<template>
    <article class="servicePanel" >
        <h3 class="heading heading--section heading--white">{{name}}</h3>
        <v-btn>more</v-btn>
    </article>
</template>
<script>

export default {
  props: {
    name: String,
    imgPath: String,
    description: String

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
  background-image: ("../assets/services/bouquets.jpg");
}

</style>

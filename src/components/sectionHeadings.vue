<template>
     <section class="sectionHeading d-flex justify-center align-center pa-16">
            <div class="sectionHeading__decor ml-4 mr-4" :class="decorColor"></div>
            <h1 class="heading heading--white heading--section" :class="headingColor">{{ sectionTitle }}</h1>
            <div class="sectionHeading__decor ml-4 mr-4" :class="decorColor"></div>
       </section>
</template>

<script>
export default {
  props: {
    sectionTitle: String,
    headingColor: String,
    decorColor:{
      default: 'sectionHeading__decor--white',
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.sectionHeading{
        width: inherit;
        height: min-height;
        position: relative;
        z-index: 2;
        &__decor{
            width: 20%;
            height: .15rem;
            &--white{
              background-color: white;
            }
            &--pink{
              background-color: pink;
            }
        }
}
</style>

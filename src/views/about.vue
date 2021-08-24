<template>
    <section class="about bg-light-pink pb-16">
      <Heading :sectionTitle=title :headingColor="headingColor"></Heading>
      <div class="about__content  d-flex align-center justify-center">
          <div class="about__content__text">
              <p class="paragraph paragraph--white">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>
                <p class="paragraph paragraph--white">Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis
                    et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim </p>
          </div>
          <div class="about__content__img pl-8">
              <img src="../assets/ABOUT.png" alt="Jasmine and Marry - our team photo">
          </div>
      </div>
    </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
export default {
  data () {
    return {
      title: 'About us',
      headingColor: 'heading--white',
    }
  },
  components: {
    Heading
  }
}
</script>
<style lang="scss">
.about{
    width: 100vw;
    height: auto;
    &__content{
        &__text{
            max-width:25%;

        }
        &__img{

        }

    }

}

</style>

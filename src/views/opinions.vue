<template>
    <section class="opinions bg-lightGreen">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
        <v-container>
            <v-row>
                <v-column >
                    <Opinion></Opinion>
                    <Opinion></Opinion>
                </v-column>
            </v-row>
            <v-row>
                <v-column>
                    <Opinion></Opinion>
                    <Opinion></Opinion>
                </v-column>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue'
import Opinion from '../components/opinionsOpinion.vue'
export default {
  data () {
    return {
      title: 'Opinions',
      headingColor: 'heading--white',
    }
  },
   components: {
    Heading,
    Opinion
  }
}
</script>
<style lang="scss">
.opinions{
    width: 100vw;
    height: 100vh;
}

</style>
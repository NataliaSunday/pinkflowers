<template>
    <section class="opinions bg-lightGreen  pb-16">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
        <v-container  class="d-flex flex-row flex-wrap" >
                 <div class="opinions__container " v-for="el in opinionsData" :key="el.index">
                     <Opinion :title="el.name" :subtitle="el.data" :text="el.text"></Opinion>
                </div>
        </v-container>
    </section>
</template>
<script>
import json from '../data/opinions.json'
import Heading from '../components/sectionHeadings.vue'
import Opinion from '../components/opinionsOpinion.vue'
export default {
  data () {
    return {
      title: 'Opinions',
      headingColor: 'heading--white',
      opinionsData: json.opinions
    }
  },
   components: {
    Heading,
    Opinion
  },
}
</script>
<style lang="scss">
.opinions{
    width: 100vw;
    height: min-content;
    &__container{
        width: 50%;
       
    }
}


</style>
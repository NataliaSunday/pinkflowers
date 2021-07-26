<template>
    <section class="opinions bg-lightGreen">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
        <v-container>
            <v-row>
                <v-column >
                    <Opinion :title="opinionsData[0].name" :subtitle="opinionsData[0].data" :text="opinionsData[0].text"></Opinion>
                     <Opinion :title="opinionsData[1].name" :subtitle="opinionsData[1].data" :text="opinionsData[1].text"></Opinion>
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
  }
}
</script>
<style lang="scss">
.opinions{
    width: 100vw;
    height: 100vh;
}

</style>
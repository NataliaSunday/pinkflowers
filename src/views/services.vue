<template>
   <section class="services bg-white">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
        <ul class="services__panels d-flex ">
            <li class="services__panels__panel" v-for="el in services" :key="el.id">
                <service-panel :name="el.name" :imgPath="el.imgPath" :description="el.description"></service-panel>
                
            </li>
        </ul>
   </section>
</template>
<script>
import json from '../data/servicesData.json'
import Heading from '../components/sectionHeadings.vue'
import servicePanel from '../components/servicePanel.vue'
export default {
  data () {
    return {
      title: 'Services',
      headingColor: 'heading--pink',
      services: json.services
    }
  },
  components: {
    Heading,
    servicePanel
  }
}
</script>
<style lang="scss">
.services{
    width: 100vw;
    height: 100vh;
    &__panels{
      width: inherit;
      height: inherit;
      list-style: none;
      &__panel{
        width: 33%;
        height: inherit;
      }
    }
}

</style>

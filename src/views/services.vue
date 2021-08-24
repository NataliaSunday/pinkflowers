<template>
   <section class="services bg-white pb-16">
        <Heading :sectionTitle=title :headingColor=headingColor :decorColor="decorColor"></Heading>
        <ul class="services__panels d-flex justify-center ">
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
      decorColor: "sectionHeading__decor--pink",
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
    height: max-content;
    &__panels{
      width: inherit;
      height:70vh;
      list-style: none;
      &__panel{
        width: 100%;
        max-width: 33.3%;
        height: 100%;
      }
    }
}

</style>

<template>
   <section class="services bg-white">
        <Heading :sectionTitle=title :headingColor=headingColor></Heading>
   </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue' 
import servicePanel from '../components/servicePanel.vue'
export default {
    data(){
        return{
            title: "Services",
            headingColor: "heading--pink",
            services: {
                name: 'bouquest',
                imgPath: '../assets/bouquest.jpg',
                description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia '

            }
        }
    },
    components:{
        Heading,
        servicePanel
    }
}
</script>
<style scoped>

</style>

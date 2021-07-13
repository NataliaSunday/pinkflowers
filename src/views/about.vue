<template>
    <section class="about">
      <Heading :sectionTitle=title></Heading>
    </section>
</template>
<script>
import Heading from '../components/sectionHeadings.vue' 
export default {
    data(){
        return{
            title: "About us"
        }
    },
    components:{
        Heading
    }
}
</script>
<style lang="scss">
.about{
    background-color: #ECBCC4;
    width: 100vw;
    height: 100vh;
    
}


</style>

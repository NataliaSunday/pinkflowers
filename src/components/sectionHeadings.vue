<template>
     <section class="sectionHeading d-flex justify-center align-center"> 
            <div class="sectionHeading__decor ml-4 mr-4"></div>
            <h1 class="heading heading--white heading--section">{{ sectionTitle }}</h1>
            <div class="sectionHeading__decor ml-4 mr-4"></div>
       </section>
</template>

<script>
export default {
    props:{
        sectionTitle: String
    }
}
</script>
<style lang="scss" scoped>
.sectionHeading{
        width: inherit;
        height: min-height;
        &__decor{
            background-color: #ffff;
            width: 20%;
            height: .15rem;
        }
    }
</style>
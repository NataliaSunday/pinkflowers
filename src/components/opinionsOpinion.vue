<template>
    <v-card class="opinion ma-4" elevation="2" shaped>
        <v-card-title class="color-dark-green">{{title}}</v-card-title>
        <v-card-subtitle class="bold">{{subtitle}}</v-card-subtitle>
        <v-card-text class="italic">{{text}}</v-card-text>
    </v-card>
</template>
<script>
export default {
    props:{
        title: String,
        subtitle:String,
        text:String
    }
    
}
</script>
<style lang="scss">
.opinion{
    width: 90%;
    background-color: black;
}
</style>
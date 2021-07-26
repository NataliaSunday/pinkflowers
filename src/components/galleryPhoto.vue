<template>
    <article class="photoBox">
        <img :src="photoUrl" alt="" class="photoBox__photo">
         
    </article>
</template>
<script>
export default {
  props: {
    photoUrl: String
  }
}
</script>
<style lang="scss">
.photoBox{
    width: 100%;
    height: 100%;
    &__photo{
        width: inherit;
        height: inherit;
    }
}

</style>

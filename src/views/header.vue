<template>
<header class="header">
        <ul class="nav__list d-flex justify-center" :class="{ 'nav__list--scrolled' : scrollPosition  > 50}">
            <li class="nav__list__item link" @click="$vuetify.goTo('#Header', ease)">HOME</li>
            <li class="nav__list__item link" @click="$vuetify.goTo('#Header', ease)">SHOP</li>
            <li class="nav__list__item link" @click="$vuetify.goTo('#About', ease)">ABOUT</li>
            <li class="nav__list__item link" @click="$vuetify.goTo('#Services', ease)">SERVICES</li>
            <li class="nav__list__item link" @click="$vuetify.goTo('#Gallery', ease)">GALERY</li>
            <li class="nav__list__item link" @click="$vuetify.goTo('#Contact', ease)">CONTACT</li>
        </ul>
        <article class="banner d-flex flex-column align-center justify-center">

        <h1 class="heading heading--header">Lorem ipsum </h1>
        <p class="paragraph paragraph--header paragraph--dark-pink">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        <v-btn class="btn align-self-center">lorem</v-btn>
        </article>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrollPosition: null
    }
  },
  methods: {
    upddateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.upddateScroll)
  }
}
</script>

<style lang="scss">
.nav {
   &__list{
       list-style: none;
       position:fixed;
       z-index: 100;
        width: 100%;
        background-color:none;
        transition:all .3s ease;
        &--scrolled{
            background-color: white;
            border-radius: 4px;
            box-shadow: rgb(211, 208, 208) 3px 2px 10px;

        }
    &__item{
        padding: 1rem;
    }
   }
}
.banner{
    height: inherit;
}
.header{
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/BG.jpg');
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
}
</style>

<template>
<header class="header d-flex flex-column">
        <ul class="nav__list d-flex justify-center mb-auto">
            <li class="nav__list__item"><a href="#Header" class="link">HOME</a></li>
            <li class="nav__list__item"><a href="#" class="link">SHOP</a></li>
            <li class="nav__list__item"><a href="#About" class="link">ABOUT</a></li>
            <li class="nav__list__item"><a href="#Services" class="link">SERVICES</a></li>
            <li class="nav__list__item"><a href="#Galery" class="link">GALERY</a></li>
            <li class="nav__list__item"><a href="#Contact" class="link">CONTACT</a></li>
        </ul>
        <article class="d-flex flex-column align-center align-self-center mb-auto">
        <h1 class="heading heading--header">Lorem ipsum</h1>
        <p class="paragraph paragraph--header paragraph--dark-pink">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        <v-btn class="btn align-self-center">lorem</v-btn>
        </article>
  </header>

</template>
<style lang="scss">
.nav {
   &__list{
       list-style: none;
    &__item{
        padding: 1rem;
    }
   }
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

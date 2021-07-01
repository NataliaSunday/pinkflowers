<template>
  <header class="header">
      <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list__item"><a href="#Header" class="nav__list__item__link">HOME</a></li>
            <li class="nav__list__item"><a href="#" class="nav__list__item__link">SHOP</a></li>
            <li class="nav__list__item"><a href="#About" class="nav__list__item__link">ABOUT</a></li>
            <li class="nav__list__item"><a href="#Services" class="nav__list__item__link">SERVICES</a></li>
            <li class="nav__list__item"><a href="#Galery" class="nav__list__item__link">GALERY</a></li>
            <li class="nav__list__item"><a href="#Contact" class="nav__list__item__link">CONTACT</a></li>
        </ul>
    </nav>
    <article class="article">
        <h1 class="article__heading--1">Lorem ipsum</h1>
        <h2 class="article__heading--2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</h2>
    </article>
  </header>
</template>
<style lang="scss" scoped>
.nav {
   width: 100vw;
   height: min-content;

   &__list{
       display: flex;
       justify-content: center;
       list-style: none;
    &__item{
        padding: 1rem;
        &__link{
            text-decoration: none;
            font-family: 'Lato';
            font-weight: 300;
            font-size: 1.25rem;
            color: #691D2E;
        }
    }
   }
}
.article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: inherit;
    align-self: center;
    &__heading--1{
        font-family: 'Lato';
        font-weight: 500;
        color: #691D2E;
        font-size: 4rem;
        text-align: center;
    }
    &__heading--2{
        font-family: 'Lato';
        font-weight: 100;
        color: #691D2E;
        font-size: 2.5rem;
        text-align: center;
    }
}
.header{
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/BG.jpg');
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
}
</style>

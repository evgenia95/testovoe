<template lang="pug">
  .page
    .mobile-header.hide-on-desktop.show-on-mobile
      nuxt-link.logo(active-class='active' to='/')
        img(src='/img/logo.svg' alt='')
      .mobile-menu
        .burger(:class='{"close":isOpen}' @click='onClick')
          .patty
          .patty
        .menu(:class="{'menu_open':isOpen}")
          <Navbar />
    .page-left.hide-on-mobile
      <Navbar />
    main
      .container
        <Nuxt />
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {

    components: {
      Navbar
    },
    name: "Menu",
    props:["menu"],
    data() {
      return { isOpen: false,
      };
    },
    methods: {
      onClick() {
        this.isOpen = !this.isOpen;
      }
    }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.burger {
  position: absolute;
  left: 25px;
  top: 20px;
  cursor: pointer;
  transform: rotateY(0);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1001;

  .patty {
    width: 28px;
    height: 3px;
    margin: 0 0 4px 0;
    background: #D6073D;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
}

.close {
  left: auto;
  right: 20px;

  div:nth-child(1) {
    transform: rotate(45deg) translate(6px, 4px);
  }

  > div:nth-child(2) {
    transform: rotate(-45deg);
  }
}

.menu {
  padding: 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  text-align: left;
  z-index: 1000;
  background: #fff;
}

.menu_open {
  visibility: visible;

  > .menu_list {
    transform: translate3d(0, 0, 0);
  }
}

.page {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #EFF1F9;
}

.page-left {
  padding: 35px 50px;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
}

main {
  padding: 35px 50px;
  width: calc(100% - 250px);
  box-sizing: border-box;
  background-color: #EFF1F9;
}

.mobile-header {
  padding: 10px 20px 15px;
  text-align: center;
  background: #fff;
}

.hide-on-desktop {
  display: none !important;
}

@media (max-width: 767px) {
  .show-on-mobile {
    display: block !important;
  }

  .hide-on-mobile {
    display: none !important;
  }

  .page {
    display: block;
  }

  main {
    padding: 35px 20px;
    width: 100%;
  }

  .logo {
    margin-bottom: 0;
  }
}
</style>

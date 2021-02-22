<template>
  <nav class="navbar ">

    <div class="navbar-inside">
      <nuxt-link active-class="active" class="b-logo hide-on-mobile nav-link" to="/">
        <img src="/img/logo.svg" alt="">
      </nuxt-link>

      <ul class="navbar-nav">
        <li class="nav-item" >
          <nuxt-link active-class="active" class="nav-link" to="/profile">
            <img src="/img/menu-1.svg" alt=""> Мой профиль
          </nuxt-link>
        </li>
        <li class="nav-item" >
          <nuxt-link active-class="active" class="nav-link" to="#">
            <img src="/img/menu-2.svg" alt=""> Список задач
          </nuxt-link>
        </li>
        <li class="nav-item" >
          <nuxt-link active-class="active" class="nav-link" to="#">
            <img src="/img/menu-3.svg" alt=""> Статистика
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
</script>

<style>
  .hide-on-desktop {
    display: none!important;
  }
  .b-logo {
    margin-bottom: 25px;
    display: inline-block;
  }
  .navbar-nav {
      padding: 0;
      margin: 0;
      list-style-type: none;
  }
  .nav-item {
    margin-bottom: 20px;
  }
  .nav-item img {
    margin-right: 10px;
  }
  .nav-item a:link,
  .nav-item a:visited {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    color: #303136
  }
  .nav-item a:hover {
    color: #D6073D;
  }
</style>

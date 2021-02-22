<template lang="pug">
    section.empty
        .container
            .logo
                nuxt-link.nav-link(active-class='active' to='/')
                    img(src='/img/logo.svg' alt='')
            .content
            <nuxt />

</template>

<style lang="scss">
    .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
    .logo {
        margin-bottom: 40px;
        text-align: center;
    }
    .content {
        margin: 0 auto;
    }
</style>
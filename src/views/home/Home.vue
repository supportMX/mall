<template>
    <div id="Home">
        <nav-bar class="home-navbar">
            <template #centen>
                <div>购物街</div>
            </template>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'Home',
    components: {
        NavBar,
    },

    NavBar,
}
</script>
<style scoped>
.home-navbar {
    color: snow;
    background-color: violet;
}
</style>

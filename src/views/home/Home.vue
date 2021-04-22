<template>
    <div id="Home">
        <nav-bar class="home-navbar">
            <template #centen>
                <div>购物街</div>
            </template>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import HomeSwiper from 'views/home/childComps/HomeSwiper'

import { getHomeMultidata } from 'network/home'

export default {
    name: 'Home',
    created() {
        getHomeMultidata().then(res => {
            // console.log(res)
            // this.multidata = res
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    },
    data() {
        return {
            banner: [],
            recommend: [],
        }
    },
    components: {
        NavBar,
        HomeSwiper,
    },
}
</script>
<style scoped>
.home-navbar {
    color: snow;
    background-color: violet;
}
</style>

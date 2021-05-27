<template>
    <div id="Home">
        <nav-bar class="home-navbar">
            <template #centen>
                <div>购物街</div>
            </template>
        </nav-bar>
        <back-top ref="backtop" @click="clickBackTop" v-show="showTop"></back-top>

        <scroll
            class="content"
            :data="showData"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="contentPullingUp"
            :probeType="3"
        >
            <home-swiper :banners="banner"></home-swiper>
            <home-recommend :Recommend="recommend" />
            <feature-view></feature-view>
            <tab-control class="tab-control" :Titles="titles" @tabClick="tabClick"></tab-control>
            <good-list :goods="showData"></good-list>
        </scroll>
    </div>
</template>
<script>
import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommend from 'views/home/childComps/HomeRecommend'
import FeatureView from 'views/home/childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/TabControl'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/BackTop.vue'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
    name: 'Home',
    created() {
        this.initHomeMultidata()
        this.initHomeGoods(this.currentytype)
        this.$bus.on('gooditemimageload', () => {
            this.$refs.scroll.refresh()
        })
    },
    computed: {
        showData() {
            return this.goods[this.currentytype].list
        },
    },
    data() {
        return {
            banner: [],
            recommend: [],
            titles: ['流行', '新款', '精选'],
            selectTab: ['pop', 'new', 'sell'],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] },
            },
            currentytype: 'pop',
            showTop: false,
        }
    },
    mounted() {},
    methods: {
        // 事件监听
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentytype = 'pop'
                    break
                case 1:
                    this.currentytype = 'new'
                    break
                case 2:
                    this.currentytype = 'sell'
                    break
                default:
                    break
            }
        },
        clickBackTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        contentScroll(point) {
            this.showTop = -point.y > 1000
        },
        async contentPullingUp() {
            await this.initHomeGoods(this.currentytype)
            this.$refs.scroll.finishPullUp()
        },
        // 数据初始化方法
        initHomeMultidata() {
            getHomeMultidata()
                .then(res => {
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async initHomeGoods(type) {
            let good = this.goods[type]
            getHomeGoods(good.page + 1, type).then(res => {
                // console.log(res.data.list)
                // this.multidata = res
                good.list.push(...res.data.list)
                good.page++
            })
        },
    },
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend,
        FeatureView,
        TabControl,
        GoodList,
        Scroll,
        BackTop,
    },
}
</script>

<style scoped>
#Home {
    position: relative;
    padding-top: 44px;
    height: 100vh;
}
.home-navbar {
    color: snow;
    background-color: violet;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

.tab-control {
    position: sticky;
    top: 44px;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0;
    /* height: 300px; */
}
</style>

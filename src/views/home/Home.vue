<template>
    <div id="Home">
        <nav-bar class="home-navbar">
            <template #centen>
                <div>购物街</div>
            </template>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <home-recommend :Recommend="recommend" />
        <feature-view></feature-view>
        <tab-control class="tab-control" :Titles="titles" @tabClick="tabClick"></tab-control>
        <good-list :goods="showData"></good-list>
        <ul>
            <li>理想奶1个</li>
            <li>理想奶2个</li>
            <li>理想奶3个</li>
            <li>理想奶4个</li>
            <li>理想奶5个</li>
            <li>理想奶6个</li>
            <li>理想奶7个</li>
            <li>理想奶8个</li>
            <li>理想奶9个</li>
            <li>理想奶10个</li>
            <li>理想奶11个</li>
            <li>理想奶12个</li>
            <li>理想奶13个</li>
            <li>理想奶14个</li>
            <li>理想奶15个</li>
            <li>理想奶16个</li>
            <li>理想奶17个</li>
            <li>理想奶18个</li>
            <li>理想奶19个</li>
            <li>理想奶20个</li>
            <li>理想奶21个</li>
            <li>理想奶22个</li>
            <li>理想奶23个</li>
            <li>理想奶24个</li>
            <li>理想奶25个</li>
            <li>理想奶26个</li>
            <li>理想奶27个</li>
            <li>理想奶28个</li>
            <li>理想奶29个</li>
            <li>理想奶30个</li>
            <li>理想奶31个</li>
            <li>理想奶32个</li>
            <li>理想奶33个</li>
            <li>理想奶34个</li>
            <li>理想奶35个</li>
            <li>理想奶36个</li>
            <li>理想奶37个</li>
            <li>理想奶38个</li>
            <li>理想奶39个</li>
            <li>理想奶40个</li>
            <li>理想奶41个</li>
            <li>理想奶42个</li>
            <li>理想奶43个</li>
            <li>理想奶44个</li>
            <li>理想奶45个</li>
            <li>理想奶46个</li>
            <li>理想奶47个</li>
            <li>理想奶48个</li>
            <li>理想奶49个</li>
            <li>理想奶50个</li>
            <li>理想奶51个</li>
            <li>理想奶52个</li>
            <li>理想奶53个</li>
            <li>理想奶54个</li>
            <li>理想奶55个</li>
            <li>理想奶56个</li>
            <li>理想奶57个</li>
            <li>理想奶58个</li>
            <li>理想奶59个</li>
            <li>理想奶60个</li>
            <li>理想奶61个</li>
            <li>理想奶62个</li>
            <li>理想奶63个</li>
            <li>理想奶64个</li>
            <li>理想奶65个</li>
            <li>理想奶66个</li>
            <li>理想奶67个</li>
            <li>理想奶68个</li>
            <li>理想奶69个</li>
            <li>理想奶70个</li>
            <li>理想奶71个</li>
            <li>理想奶72个</li>
            <li>理想奶73个</li>
            <li>理想奶74个</li>
            <li>理想奶75个</li>
            <li>理想奶76个</li>
            <li>理想奶77个</li>
            <li>理想奶78个</li>
            <li>理想奶79个</li>
            <li>理想奶80个</li>
            <li>理想奶81个</li>
            <li>理想奶82个</li>
            <li>理想奶83个</li>
            <li>理想奶84个</li>
            <li>理想奶85个</li>
            <li>理想奶86个</li>
            <li>理想奶87个</li>
            <li>理想奶88个</li>
            <li>理想奶89个</li>
            <li>理想奶90个</li>
            <li>理想奶91个</li>
            <li>理想奶92个</li>
            <li>理想奶93个</li>
            <li>理想奶94个</li>
            <li>理想奶95个</li>
            <li>理想奶96个</li>
            <li>理想奶97个</li>
            <li>理想奶98个</li>
            <li>理想奶99个</li>
            <li>理想奶100个</li>
        </ul>
    </div>
</template>
<script>
import HomeSwiper from 'views/home/childComps/HomeSwiper'
import HomeRecommend from 'views/home/childComps/HomeRecommend'
import FeatureView from 'views/home/childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodList from 'components/content/goods/GoodList'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
    name: 'Home',
    created() {
        this.initHomeMultidata()
        this.initHomeGoods('pop')
        this.initHomeGoods('new')
        this.initHomeGoods('sell')
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
        }
    },
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

        // 数据初始化方法
        initHomeMultidata() {
            getHomeMultidata()
                .then(res => {
                    // console.log(res)
                    // this.multidata = res
                    this.banner = res.data.banner.list
                    this.recommend = res.data.recommend.list
                })
                .catch(err => {
                    console.log(err)
                })
        },
        initHomeGoods(type) {
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
    },
}
</script>
GoodList

<style scoped>
#Home {
    padding-top: 44px;
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
</style>

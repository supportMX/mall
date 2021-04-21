<template>
    <div>
        <!-- <router-view></router-view> -->
        <tab-bar>
            <!-- <tab-bar-item path="/home" textColor="blue">  这种方式可改字体颜色-->
            <tab-bar-item path="/home">
                <template #item-icon>
                    <img src="~assets/img/tabbar/home.svg" />
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/home_active.svg" />
                </template>
                <template #item-text>
                    首页
                </template>
            </tab-bar-item>
            <tab-bar-item path="/category">
                <template #item-icon>
                    <img src="~assets/img/tabbar/category.svg" />
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/category_active.svg" />
                </template>
                <template #item-text>
                    分类
                </template>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template #item-icon>
                    <img src="~assets/img/tabbar/shopcart.svg" />
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/shopcart_active.svg" />
                </template>
                <template #item-text>
                    购物车
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template #item-icon>
                    <img src="~assets/img/tabbar/profile.svg" />
                </template>
                <template #item-icon-active>
                    <img src="~assets/img/tabbar/profile_active.svg" />
                </template>
                <template #item-text>
                    我的
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem,
    },
}
</script>
<style scoped>
.tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 0px;
}
</style>

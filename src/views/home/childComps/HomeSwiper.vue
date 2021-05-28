<template>
    <div>
        <swiper>
            <swiper-item v-for="(item, index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" @load="swiperload" />
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name: 'Home',
    props: {
        banners: {
            type: Array,
            default: function() {
                return []
            },
        },
    },
    components: {
        Swiper,
        SwiperItem,
    },
    methods: {
        swiperload() {
            this.$emit('swiperload')
        },
    },
}
</script>
<style scoped>
.slide img {
    width: 100%;
}
</style>

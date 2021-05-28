<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { debouch } from 'common/utils'

export default {
    name: 'Home',
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        probeType: {
            type: Number,
            default: 1,
        },
        pullUpLoad: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            scroll: null,
            // 定义函数
            debouchrefresh: debouch(() => {
                console.log('执行Scroll刷新')
                this.scroll && this.scroll.refresh()
            }, 100),
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click: true,
        })

        this.initBscroll()
        // setTimeout(() => {
        //     console.log(this.scroll.maxScrollY)
        //     this.scroll.refresh()
        //     console.log(this.scroll.maxScrollY)
        // }, 2000)
    },
    methods: {
        initBscroll() {
            this.scroll.on('scroll', point => {
                this.$emit('scroll', point)
            })
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
                // this.scroll.finishPullUp()
            })
        },
        // 提供给外部调用的刷新函数。在内部实现了防抖动
        refresh() {
            this.debouchrefresh()
        },

        finishPullUp() {
            this.scroll.finishPullUp()
        },
        scrollTo(x, y, time = 300) {
            this.scroll.scrollTo(x, y, time)
        },
        showdongrefresh() {
            this.scroll && this.scroll.refresh()
        },
    },
    // watch: {
    //     // data: {
    //     //     handler() {
    //     //         setTimeout(this.refresh, 20)
    //     //     },
    //     //     deep: true,
    //     // },
    // },
}
</script>
<style scoped></style>

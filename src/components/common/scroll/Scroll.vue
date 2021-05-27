<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

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
    },
    data() {
        return {
            scroll: null,
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            pullUpLoad: true,
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
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        scrollTo(x, y, time = 300) {
            this.scroll.scrollTo(x, y, time)
        },
        showdongrefresh() {
            this.scroll.refresh()
        },
    },
    watch: {
        data: {
            handler() {
                setTimeout(this.refresh, 20)
            },
            deep: true,
        },
    },
}
</script>
<style scoped></style>

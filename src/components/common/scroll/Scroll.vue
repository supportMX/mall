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
    },
    data() {
        return {
            scroll: null,
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {})
        this.initBscroll()
        // setTimeout(() => {
        //     console.log(this.scroll.maxScrollY)
        //     this.scroll.refresh()
        //     console.log(this.scroll.maxScrollY)
        // }, 2000)
    },
    methods: {
        initBscroll() {},
        refresh() {
            this.scroll && this.scroll.refresh()
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

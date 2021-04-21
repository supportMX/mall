<template>
    <div id="tab-bar-item" @click="clickItem">
        <div v-if="isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeColor">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        textColor: {
            type: String,
            default: 'red',
        },
    },
    data() {
        return {
            // isActive: false,
            // textColor: 'red'
        }
    },
    computed: {
        isActive() {
            return this.$route.path !== this.path
        },
        activeColor() {
            return !this.isActive ? { color: this.textColor } : {}
        },
    },
    methods: {
        clickItem() {
            if (this.$route.path !== this.path) {
                this.$router.replace(this.path)
            }
        },
    },
}
</script>
<style scoped>
#tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
#tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 0px;
}
#textactive {
    color: rgb(0, 0, 0);
}
</style>

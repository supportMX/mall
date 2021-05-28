<template>
    <div class="tab-control">
        <div
            class="tab-control-item"
            v-for="(item, index) in Titles"
            :key="index"
            :class="{ active: index == currentIndex }"
            @click="itemClick(index)"
        >
            <span>{{ item }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabClick', index)
        },
    },
    props: {
        Titles: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
<style>
.tab-control {
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    font-size: 15px;
    background-color: rgb(255, 255, 255);
    z-index: 9;
    padding-top: 5px;
}
.tab-control-item {
    margin-top: 5px;
    flex: 1;
}
.tab-control-item span {
    padding: 3px;
}

.active {
    color: indianred;
}

.active span {
    border-bottom: 3px solid indianred;
}
</style>

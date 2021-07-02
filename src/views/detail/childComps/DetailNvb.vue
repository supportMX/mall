<template>
    <nav-bar>
        <template #left>
            <div class="back" @click="clickBack">
                <img src="../../../assets/img/common/back.svg" />
            </div>
        </template>
        <template #centen>
            <div class="titles">
                <div
                    v-for="(itme, index) in titles"
                    :key="index"
                    class="titles-item"
                    :class="{ active: index === currentIndex }"
                    @click="clickNVB(index)"
                >
                    {{ itme }}
                </div>
            </div>
        </template>
    </nav-bar>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
    components: { NavBar },
    name: 'Home',
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0,
        }
    },
    methods: {
        clickNVB(index) {
            this.currentIndex = index
        },
        clickBack() {
            this.$router.back()
        },
    },
}
</script>
<style scoped>
.back {
    margin-top: 5px;
}
.titles {
    display: flex;
}
.titles-item {
    flex: 1;
}
.active {
    color: red;
}
</style>

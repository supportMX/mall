<template>
    <div>
        <detail-nvb></detail-nvb>
        <h2>我是详情页</h2>
        <h2>{{ iid }}</h2>
    </div>
</template>
<script>
import DetailNvb from './childComps/DetailNvb.vue'
export default {
    components: { DetailNvb },
    name: 'detail',
    created() {
        this.iid = this.$route.params.iid
    },
    data() {
        return {
            iid: null,
        }
    },
}
</script>
<style scoped></style>

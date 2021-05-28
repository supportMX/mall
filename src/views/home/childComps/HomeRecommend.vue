<template>
    <div class="recommend">
        <div v-for="(item, index) in Recommend" :key="index" class="recommend-item">
            <a href="item.link">
                <img :src="item.image" />
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    props: {
        Recommend: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
<style scoped>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    border-bottom: 8px solid #eee;
    padding: 15px 0 15px;
}
.recommend-item {
    flex: 1;
}

.recommend img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>
